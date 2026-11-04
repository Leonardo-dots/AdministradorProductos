import { useEffect, useState } from "react";
import { DataContext } from "./DataContext";
import { fetchAll } from "../services/fetch";
import { usePageState } from "../hooks/usePageState";

function DataProvider({ children }){
    const [data, setData] = useState([]);

    const { state, handleLoading, handleError } = usePageState()

    useEffect(() => {
        (async function getData(){
            try{
                const data = await fetchAll()
                setData(data)
            }catch(error){
                handleError(error)
            }
            finally{
                handleLoading(false)
            }
        })()
    }, [])

    return(
        <DataContext.Provider value={{ state, data }}>
            { children }
        </DataContext.Provider>
    )
}

export { DataProvider }
