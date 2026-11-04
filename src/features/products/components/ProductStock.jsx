export default function ProductStock({ stock }){

    let stockState = {
        icon: null,
        message: null,
    }

    switch(true){
        case stock > 10:
            stockState = {
                icon: "check_circle",
                message: "En Stock",
            }
            break
        case stock > 5:
            stockState = {
                icon: "",
                message: "Stock Bajo",
            }
            break;
        case stock > 1:
            stockState = {
                icon: "",
                message: "Ultimas unidades"
            }
            break;
        case stock === 1:
            stockState = {
                icon: "",
                message: "Ultima unidad",
            }
            break;
        case stock === 0:
            stockState = {
                icon: "",
                message: "Sin Stock"
            }
            break;
    }


    return(
        <div className="stock">
            <span class="material-symbols-outlined">{stockState.icon}</span>
            <span>{stockState.message}</span>
        </div>
    )
}