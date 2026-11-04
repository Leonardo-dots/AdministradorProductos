import calculateWithoutDiscount from "../../../utils/discount";
export default function ProductPrice({ price, discountPercentage }){
    return(
        <div className="price-container">
            <span>${price}</span>
            <span>%{discountPercentage}</span>
            <span>${calculateWithoutDiscount(price, discountPercentage)}</span>
        </div>
    )
}