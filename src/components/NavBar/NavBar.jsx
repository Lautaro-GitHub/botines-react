import CardWidget from "./CardWidget/CardWidget";
import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg nav">
            <div className="container">
                <Link className="navbar-brand" to="/"><img className="logo-nav" src="https://i.ibb.co/C0Mb7SC/logo-removebg-preview.png" alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/tienda">Tienda</Link>
                        </li>
                    </ul>
                    <CardWidget/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;