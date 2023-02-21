import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">93/94</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav me-auto">
        <li className="nav-item">
            <a className="nav-link active" href="#">Old School
            <span className="visually-hidden">(current)</span>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Rules</a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Buy singles</a>
            <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Alpha</a>
            <a className="dropdown-item" href="#">Beta</a>
            <a className="dropdown-item" href="#">Unlimited</a>
            <a className="dropdown-item" href="#">Arabian Nights</a>
            <a className="dropdown-item" href="#">Antiquities</a>
            <a className="dropdown-item" href="#">Legends</a>
            <a className="dropdown-item" href="#">The Dark</a>
            </div>
        </li>
        </ul>
    </div>
    </div>
    <CartWidget/>
</nav>
    );
}

export default NavBar;