import { useSearchParams } from "react-router-dom";

export default function useProductParameters(){
    const [ searchParams, setSearchParams ] = useSearchParams();
    const { page = 1, search = "", category = "all", sort = "without-order" } = Object.fromEntries(searchParams)

    function setNewParameters(parameters){
        const queryParams = new URLSearchParams(searchParams)
        const arrParameters = Object.entries(parameters);
        for (let [clave, valor] of arrParameters){
            if(clave === "search" || clave === "category"){
                queryParams.set("page", 1);
            }
            queryParams.set(clave, valor);
        }

        setSearchParams(queryParams)
    }

    const parameters = {
        search,
        category,
        sort,
        page: Number(page)
    }

    return { parameters, setNewParameters }
}
