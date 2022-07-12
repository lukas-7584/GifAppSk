import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../logoBarra.png';

const NavBar = () => {
    return (
    <div >
        <nav className="navbar navbar-expand-lg bg-light mb-5">
            <div className="container-fluid">
            <Link to='/'>
                <img src={logo} width='80px' />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item navTitulo">
                    <Link className="nav-link "  to='/'>
                    Inicio
                    </Link>
                </li>
                <li className="nav-item navTitulo">
                    <Link className="nav-link" to='/Repo'>
                    Repositories GitHub
                    </Link>
                </li>
                <li className="nav-item navTitulo">
                    <Link className="nav-link" to='/Contacto'>
                        Contacto
                    </Link>
                </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
    );
}

export default NavBar