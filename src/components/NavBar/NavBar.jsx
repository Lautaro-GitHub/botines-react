import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg nav">
            <div className="container">
                <a className="navbar-brand" href="/"><img className="logo-nav" src="https://i.ibb.co/C0Mb7SC/logo-removebg-preview.png" alt="logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " href="">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Informacion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;