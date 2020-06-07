import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi'
import './home.css'

const Home: React.FC = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                <img src={Logo} alt="ecoleta" />
                </header>

                <main>
                    <h1>Seu marketplace de coleta de residuos.</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</p>

                    <Link to='/create-point'>
                        <span> <FiLogIn/> </span>
                        <strong>Cadastre um ponto de coleta</strong>
                    </Link>
                </main>
            </div>
        </div>
    );
}

export default Home;