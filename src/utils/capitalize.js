export default function capitalize(string){
    const upper = string.charAt(0).toUpperCase()
    return string.replace(string[0], upper)                                                                                  
}