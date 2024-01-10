import React from 'react'

export default function NavBar() {
    return (
        <div>

            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-success">
                    <a className="navbar-brand" href="#">
                        VoaBrasil
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/usuario">
                                    Usuarios
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/destino">
                                    Destinos
                                </a>
                            </li>                                                                                                                                  
                            <li className="nav-item active">
                                <a className="nav-link" href="/passagem">
                                    Passagens
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

        </div>
    )
}
