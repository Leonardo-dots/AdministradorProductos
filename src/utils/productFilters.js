//Funciones de filtros separadas.
function searchFilter(search, data){
    if(search === "") return data
    return data.filter(element => element.title.toLowerCase().includes(search.toLowerCase()))
}
function categoryFilter(category, data){
    if(category === "all") return data
    return data.filter(element => element.category === category)
}
function sortData(sort, data){
     switch(sort){
        case "without-order":
            break;
        case "asc":
            data.sort((a, b) => a.title.localeCompare(b.title))
            break;
        case "desc":
            data.sort((a, b) => b.title.localeCompare(a.title))
            break;
    }
    return data
}

export { searchFilter, categoryFilter, sortData }