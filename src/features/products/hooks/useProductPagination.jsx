import useProductParameters from "./useProductParameters";

export default function useProductPagination(data){
    
    const { parameters } = useProductParameters();
    const { page } = parameters
    const elementsForPage = 10;
    const firtsElementPage = page * elementsForPage - elementsForPage;
    const lastElementPage = firtsElementPage + elementsForPage;
    const maxPages = Math.ceil(data.length / elementsForPage || 1);

    let currentPage = data.slice(firtsElementPage, lastElementPage);

    //Array menu navigation
    let toStart = page - 2;
    if(toStart < 1){
            toStart = 1;
    }
    if(maxPages > 5){
        if(toStart > maxPages - 4){
            toStart = maxPages - 4;
        }
    }

    const arrayMenuNavigation = maxPages > 5 ? Array.from({ length: 5 }, (_, index) =>{
        return toStart + index
    }) : Array.from({ length: maxPages }, (_, index) =>{
        return toStart + index;
    })
    if(arrayMenuNavigation.at(-1) < maxPages - 1){
        arrayMenuNavigation.push("...", maxPages)
    }
    if(arrayMenuNavigation.at(0) > 2){
        arrayMenuNavigation.unshift(1, "...")
    }

    const pages = {
        firstPage: 1,
        lastPage: maxPages,
    }

    return { pages, currentPage, arrayMenuNavigation }
}
