import { useNavigate } from "react-router-dom";
import ProductRating from "./ProductRating";
import ProductStock from "./ProductStock";
import ProductPrice from "./ProductPrice";

export default function LiProduct({ product }){

    const navigate = useNavigate()
    

    return(
        <li onClick={() => navigate(`/products/${product.id}`)} className="product-li">
            <ProductRating rating={product.rating}/>
            <div>
                <img src={product.images[0]} alt="" />
            </div>
            <h3>{product.title}</h3>
            <ProductStock stock={product.stock} />
            <p>{product.description}</p>
            <ProductPrice price={product.price} discountPercentage={product.discountPercentage}/>
        </li>
    )
}
