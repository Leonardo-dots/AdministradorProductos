import ProductRating from "./ProductRating";

export default function ProductReviews({ product }){
    return(
        <div className="users-reviews">
            {product.reviews.map((review, index) => <CardReview key={index} review={review} />)}
        </div>
    )
}

function CardReview({ review }){
    const date = new Date(review.date).toLocaleDateString("es-AR")
    
    return(
        <div className="user-review">
            <div>
                <span>{review.reviewerName.at(0).toUpperCase()}</span>
                <span>{review.reviewerName}</span>
                <span>{date}</span>
            </div>
            <ProductRating  rating={review.rating}/>
            <p>{review.comment}</p>
        </div>
    )
}