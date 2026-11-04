import ProductNavFilter from "../components/ProductNavFilter";
import Loading from "../../../components/ui/Loading"
import ProductsList from "../components/ProductsList"
import ProductsPaginateMenu from "../components/ProductsPaginateMenu"
import ErrorMessage from "../../../components/ui/ErrorMessage"
import useProductParameters from "../hooks/useProductParameters";
import { useContext } from "react";
import { DataContext } from "../../../contexts/DataContext";
import { Navigate } from "react-router-dom";
import { categoryFilter, searchFilter, sortData } from "../../../utils/productFilters"
import useProductPagination from "../hooks/useProductPagination";


export default function ProductsPage(){
    const { state, data } = useContext(DataContext);
    const { parameters } = useProductParameters();
    const { search, category, sort } = parameters

    let newData = [...data]
    newData = searchFilter(search, newData);
    newData = categoryFilter(category, newData)
    newData = sortData(sort, newData)

    const { pages, currentPage, arrayMenuNavigation } = useProductPagination(newData)

    if(!state.loading){
        if(parameters.page < pages.firstPage || parameters.page > pages.lastPage ){
        return <Navigate to="/products"/>
        }
    }

    return(
        <>
            { state.error ?
            <ErrorMessage error={state.error}/> : 
            <>
                <ProductNavFilter/>
                {state.loading ? <Loading/> : <ProductsList data={currentPage}/>}
                {state.loading || 
                currentPage.length === 0 || <ProductsPaginateMenu pages={pages} arrayMenuNavigation={arrayMenuNavigation}/>}
            </> }
        </>
    )
}
