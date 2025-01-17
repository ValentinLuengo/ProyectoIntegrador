import React, { Fragment, useEffect, useState } from "react";
import "../assets/styles/normalize.css";
import "../assets/styles/registro.css";
import "../assets/styles/styles.css";
import "../assets/styles/indexStyles.css";
import "../assets/styles/productCartStyles.css";
import "../assets/styles/app.css";
import logo from "../assets/images/header-logo-768px.png";
import logosmall from "../assets/images/header-logo-368px.png";
// import logoAvatar from "../assets/images/logo.png";
import banner from "../assets/images/banners02.jpg";

const Header = () => {
    const [img, setImg] = useState([])

    useEffect(() => {
        fetch("/api/users")
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((img) => {
                console.log(img.data[0])
                setImg(img.data[0]);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <Fragment>
            <div className="row">
            <div className="col-12" >
            <div className="header" >
                <div className="header-logo" >
                    <a href="http://localhost:3001">
                        <img
                            className="header-logo-368px"
                            src={logosmall}
                            alt="logo"
                        />
                        <img
                            className="header-logo-768px"
                            src={logo}
                            alt="logo"
                        />
                    </a>
                </div>
                <div className="header-busqueda">
                    <form action="/search" method="GET">
                        <input
                            className="header-search"
                            type="search"
                            name="search"
                            id="search"
                            placeholder="  Busqueda"
                        />
                        <a href={`http://localhost:3001/search?search=`}>
                        <i className="fas fa-search"></i>
                        </a>
                    </form>
                </div>
                <div className="header-carrito">
                    <form action="/agregarCarrito" method="GET">
                        <a href="http://localhost:3001/agregarCarrito">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                    </form>
                </div>

                <div className="imagen-perfil-header">
                    <a href="/user">
                        <img
                            src={img.image}
                            alt="Imagen de perfil miniatura"
                        />
                    </a>
                </div>
            </div>
            <div className="header-navegacion">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid  ">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse  justify-content"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav ">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active  text-center"
                                        aria-current="page"
                                        href="http://localhost:3001/store"
                                    >
                                        Tienda
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link active text-center"
                                        aria-current="page"
                                        href="http://localhost:3001/nuevoProducto"
                                    >
                                        Nuevo Producto
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link active text-center"
                                        aria-current="page"
                                        href="http://localhost:3000"
                                    >
                                        Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link active text-center"
                                        aria-current="page"
                                        href="http://localhost:3001/user"
                                    >
                                        Perfil
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link active text-center"
                                        aria-current="page"
                                        href="http://localhost:3001/logout"
                                    >
                                        Cerrar Sesión
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="banner">
                <img src={banner} alt="banner" title="Imagen Promociónal" />
            </div>
            </div>
            </div>
        </Fragment>
    );
};

export default Header;
