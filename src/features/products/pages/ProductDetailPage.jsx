import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchOneProduct } from "../../../services/fetch";
import Loading from "../../../components/ui/Loading";
import ErrorMessage from "../../../components/ui/ErrorMessage"
import ProductDetail from "../components/ProductDetail"
import { usePageState } from "../../../hooks/usePageState";
import { ProductDetailed } from "../components/ProductDetailed";
import ProductReviews from "../components/ProductReviews";

export default function PageProductDetails(){
    const { state, handleLoading, handleError } = usePageState()

    const [dataProd, seDataProd] = useState(null)
    const { id } = useParams();
    

    useEffect(() => {
        const controller = new AbortController();
        (async function fetching(){
            try{
                const data = await fetchOneProduct(id, controller.signal);
                seDataProd(data);
            }catch(error){
                if(error.name === "AbortError") return console.log("Peticion cancelada");
                handleError(error.status)
            }finally{
                if(!controller.signal.aborted){
                    handleLoading(false)
                }
                
            }
        })()

        return () => {
            controller.abort();
        }

    }, [id])


    return(
        <section className="product-detail-page">
            {state.loading ?
                <Loading/> :
                state.error ?
                <ErrorMessage error={state.error}/> :
                <>
                    <ProductDetail product={dataProd}/> 
                    <ProductDetailed product={dataProd}/>
                    <ProductReviews product={dataProd}/>
                </>}
        </section>
    )
}
