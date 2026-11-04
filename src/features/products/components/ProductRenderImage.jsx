import { useState } from "react";
export default function RenderImage({ arrImages }){
    const [imagePrincipal, setImagePrincipal] = useState(arrImages[0]);
    function handleChangeImage(event){
        setImagePrincipal(event.target.src);
    }
    return(
        <div className="images-container">
            {arrImages.length > 1 && 
            <div>
                {arrImages.map((image, index) => {
                    
                    return(
                        <div key={index} >
                            <img onClick={handleChangeImage} src={image} alt="" />
                        </div>
                    )
                })}
            </div>}
            <img src={imagePrincipal} alt="" />
        </div>
    )
}