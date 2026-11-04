export default function ErrorMessage({ error }){
    return(
        <>
            <h1>{error.status}</h1>
            <h3>{error.title}</h3>
            <p>{error.message}</p>
        </>
    )
}