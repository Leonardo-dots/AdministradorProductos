import { NavLink, Outlet, useOutletContext } from "react-router-dom"
import ProductStock from "./ProductStock";
function ProductDetailed({ product }){

    return(
        <section className="product-detailed">
            <nav>
                <NavLink replace end to="." className={({ isActive }) => isActive ? "isActive" : "" }>Descripcion</NavLink>
                <NavLink replace to="specifications" className={({ isActive }) => isActive ? "isActive": "" } >Especificaciones</NavLink>
                <NavLink replace to="shipping-returns" className={({ isActive }) => isActive ? "isActive" : ""} >Envios y devoluciones</NavLink>
                <NavLink replace to="warranty" className={({ isActive }) => isActive ? "isActive" : "" }>Garantia</NavLink>
            </nav>
            <div>
                <Outlet context={product}/>
            </div>
        </section>
    )
}

function ProductDescription(){
    const product = useOutletContext()
    return(
         <div>
            <h3>Descripcion del producto</h3>
            <p>{product.description}</p>
            <div className="product-aditional-info">
                    <div>
                        <span>Marca</span>
                        <span>{product.brand}</span>
                    </div>
                    <div>
                        <span>SKU</span>
                        <span>{product.sku}</span>
                    </div>
                    <div> 
                        <span>Tags</span>
                        <span>{product.tags.map(tag => tag)}</span>
                    </div>
                </div>
        </div>
    )
}

function ProductSpecifications(){
    const product = useOutletContext();
    console.log(product.dimensions)
    return(
        <div className="product-specifications">
            <h3>Especificaciones</h3>
            <div>
                <span>Marca</span>
                <span>{product.brand}</span>
            </div>
            <div>
                <span>SKU</span>
                <span>{product.sku}</span>
            </div>
            <div>
                <span>Dimensiones (an × al × prof)</span>
                <span>{Object.values(product.dimensions).join(" × ")}</span>
            </div>
            <div>
                <span>Peso</span>
                <span>{product.weight} (Unidad no indicada)</span>
            </div>
            <div>
                <span>Codigo de Barras</span>
                <span>{product.meta.barcode}</span>
            </div>
            <div>
                <span>Cantidad minima</span>
                <span>{product.minimumOrderQuantity}</span>
            </div>
        </div>
    )
}

function ProductShippingReturns(){
    const product = useOutletContext();
    return(
        <div className="product-shipping-return">
            <h3>Envios y Devoluciones</h3>
            <div>
                <InfoCard icon="arrow_right_alt" title="Plazo de envio" text={product.shippingInformation}/>
                <InfoCard icon="arrow_right_alt" title="Politica de devolucion" text={product.returnPolicy} />
            </div>
            <div>
                <span>Disponibilidad: </span>
                <ProductStock stock={product.stock}/>
            </div>
        </div>
    )
}

function ProductWarranty(){
    const product = useOutletContext();
    return(
        <div className="product-warranty">
            <h3>Garantia del producto</h3>
            <InfoCard icon="verified_user" title="Garantia informada" text={product.warrantyInformation}/>
        </div>
    )
}

function InfoCard({ icon, title, text }){
    return(
        <div className="modal-card">
            <span className="material-symbols-outlined">{icon}</span>
            <div>
                <h3>{title}</h3>
                <span>{text}</span>
            </div>
        </div>
    )
}

export { ProductDetailed, ProductDescription, ProductSpecifications, ProductShippingReturns, ProductWarranty }