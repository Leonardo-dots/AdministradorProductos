import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
export default function Header(){
    return(
        <header className="header-menu">
            <div className="header-icon">
                <img src={logo} alt="logo de la pagina." />
            </div>
            <div className="nav-buttons">
                <NavLink to="/products" className={({ isActive }) => isActive ? "button-active" : ""} >Productos </NavLink>
                <NavLink to="/orders" className={({ isActive }) => isActive ? "button-active" : ""} >Pedidos</NavLink>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "button-active" : ""} >DashBoard</NavLink>
            </div>
        </header>
    )
}
