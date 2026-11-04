import { useNavigate } from "react-router";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import ProductStock from "./ProductStock";
import RenderImage from "./ProductRenderImage";

export default function ProductDetail({ product }){
    const navigate = useNavigate()
    return(
        <>
        <div className="product-detail">
            <RenderImage arrImages={product.images}/>
            {/* <div className="img-container">
                <img src={product.images[0]}/>
            </div> */}
            <div className="product-info">
                <span onClick={() => navigate(`/products/?category=${product.category}`) } className="product-category">{product.category}</span>
                <h2>{product.title}</h2>
                <div className="rating-product">
                    <ProductRating rating={product.rating} />
                    <p>({product.reviews.length} reseñas)</p>
                </div>
                <ProductStock stock={product.stock} />
                <ProductPrice price={product.price} discountPercentage={product.discountPercentage}/> 
                <p className="product-detail_description">{product.description}</p>
                <div className="product-buy-information">
                    <div>
                        <span className="material-symbols-outlined">delivery_truck_speed</span>
                        <span>Envio</span>
                        <p>{product.shippingInformation}</p>
                    </div>
                    <div>
                        <span className="material-symbols-outlined">verified_user</span>
                        <span>Garantia</span>
                        <p>{product.warrantyInformation}</p>
                    </div>
                    <div>
                        <span className="material-symbols-outlined">check_circle</span>
                        <span>Devoluciones</span>
                        <p>{product.returnPolicy}</p>
                    </div>
                </div>
                <button className="product-button-modify">Modificar</button>
            </div>
        </div>
        </>
    )
}



