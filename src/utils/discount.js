export default function calculateWithOutDiscount(price, discount){
    const priceClean = Number(price)
    const discountClean = Number(discount)
    const totalDiscount = (priceClean * discountClean) / 100;

    if(isNaN(totalDiscount)) return null;

    const newPrice = priceClean + totalDiscount

    return newPrice.toFixed(2);
}