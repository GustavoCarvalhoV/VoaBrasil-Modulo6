import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-dark text-white py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <h5>Contato</h5>
                            <p>Email: contato@voabrasil.com</p>
                            <p>Telefone: (XX) XXXX-XXXX</p>
                            <p>Site desenvolvido por Gustavo Carvalho</p>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <h5>Redes Sociais</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://www.facebook.com/">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/">Twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <h5>Endereço</h5>
                            <p>Rua VoaBrasil, 100</p>
                            <p>Natal - RN</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
