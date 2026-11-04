import LiProduct from "./ProductLi";

export default function ProductsList({ data }){
    
    return(
        <>
            {data.length === 0 ?
                <h3>No se han encontrado productos</h3> :
                <ul className="product-list">
                    {data.map(product => <LiProduct key={product.id} product={product}/>)}
                </ul>
            }
        </>
    )
}
