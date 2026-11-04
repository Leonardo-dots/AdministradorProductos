import { useState } from "react";

export function usePageState(){

    const [state, setState] = useState({
        loading: true,
        error: null,
    })

    function handleLoading(boolean){
        setState(prev => ({...prev, loading: boolean }))
    }

    function handleError(error){
        setState(prev => ({ ...prev, error }))
    }

    return { state, handleLoading, handleError };
}