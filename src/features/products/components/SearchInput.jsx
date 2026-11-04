import { useState, useRef, useEffect } from "react"
import useProductParameters from "../hooks/useProductParameters";

export default function SearchInput(){
    const { parameters, setNewParameters } = useProductParameters();
    const [ searchValue, setSearchValue ] = useState(() => parameters.search || "");
    const timeoutRef = useRef(null);

    useEffect(() =>{
        setSearchValue(parameters.search);
        return () => clearTimeout(timeoutRef.current)
    },[parameters.search])

    return(
        <input onChange={(event) => {
            setSearchValue(event.target.value); 
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setNewParameters({ search: event.target.value })
            }, 300)
        }}
            value={searchValue} type="text" name="search" placeholder="Busca lo que quieras" />
    )
}
