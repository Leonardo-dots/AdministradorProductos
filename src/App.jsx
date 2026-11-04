import Header from "./components/layout/Header"
import ProductDetailPage from "./features/products/pages/ProductDetailPage"
import ProductsPage  from "./features/products/pages/ProductsPage";
import Home from "./pages/HomePage";
import { DataProvider } from "./contexts/DataProvider"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductDescription, ProductShippingReturns, ProductSpecifications, ProductWarranty } from "./features/products/components/ProductDetailed";

export default function App(){

    return(
        <BrowserRouter>
            <Header/>
            <main>
                <DataProvider>
                    <Routes>
                        <Route path="/" element={ <Home/> }/>
                        <Route path="/products">
                            <Route index element={ <ProductsPage/> }/>
                            <Route path=":id" element={ <ProductDetailPage/> }>
                                <Route index element={ <ProductDescription/> }/>
                                <Route path="specifications" element={ <ProductSpecifications/> } />
                                <Route path="shipping-returns" element={ <ProductShippingReturns/> } />
                                <Route path="warranty" element={ <ProductWarranty/> } />
                            </Route>
                        </Route>
                    </Routes>
                </DataProvider>
            </main> 
        </BrowserRouter>
    )
}
