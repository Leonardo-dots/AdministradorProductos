import starsRating from "../../../utils/starsRating";
export default function ProductRating({ rating }){
    const startsProduct = starsRating(rating)
    return(
        <div className="rating-product">
            <div className="stars">
                {startsProduct.map((star, index) => {
                    if(star === "full") return <span key={index} className="material-symbols-outlined">star</span>
                    if(star === "half") return <span key={index} className="material-symbols-outlined">star_half</span>
                })}
            </div>
            <span>{rating}</span>
        </div>
    )
}