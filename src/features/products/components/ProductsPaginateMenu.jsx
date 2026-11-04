import useProductParameters from "../hooks/useProductParameters"

export default function ProductsPaginateMenu({ pages, arrayMenuNavigation }){
    const { parameters, setNewParameters } = useProductParameters() 
    const { page } = parameters


    return(
        <div className="paginate-menu">
            <button onClick={() => { 
                window.scrollTo({ top: 0, behavior: "smooth" })
                pages.firstPage > page - 1 || setNewParameters({ page: (page - 1) }) }} className="reduce">atras</button>
                {arrayMenuNavigation.map((element, index) => {
                if(element === "...") return <span key={index}>{element}</span>
                return <button key={index} onClick={() => { 
                    window.scrollTo({ top: 0, behavior: "smooth" })
                    setNewParameters({ page: element }) }}>{element}
                </button>})}
            <button onClick={() => { 
                window.scrollTo({ top: 0, behavior: "instant" });
                pages.lastPage < page + 1 || setNewParameters({ page: (page + 1) }) }} className="increment">adelante</button>
        </div>
    )
}
