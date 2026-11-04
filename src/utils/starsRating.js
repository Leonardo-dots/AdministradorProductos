export default function starsRating(ratingProduct){
    const ratingClean = Number(ratingProduct);
    if(isNaN(ratingClean)) return
    const rating = Math.round(ratingClean * 2) / 2
    const starsRating = Array.from({ length: 5 }, (_, index) =>  {
       return index + 1 <= rating ? "full" : "empty";
    })
    if(!Number.isInteger(rating)){
        const index = starsRating.indexOf("empty");
        starsRating.splice(index, 1, "half");
    }
    return starsRating;
}