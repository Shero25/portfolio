import React from 'react';
import { Navbar, Container } from "react-bootstrap";

function NavBar (){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-lg">
            <div className="container-fluid px-3">
                <a className="navbar-brand" href="#">
                    <img src="logo.png" alt="Portfolio Logo" style={{ height: '40px' }} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active" aria-current="page" href="#">About</a>
                        <a className="nav-link" href="#">Projects</a>
                        <a className="nav-link" href="#">Contacts</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default NavBar
