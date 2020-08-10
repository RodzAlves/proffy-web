import React from 'react';
import './styles.css'

import { Link } from 'react-router-dom';


import PageHeader from '../../components/PageHeader';

import notFoundImg from '../../assets/images/page-not-found.svg';

function ErrorPage() {
    return(
        <div id="error-page" className="container">
            <PageHeader title="Ops, página não encontrada..."/>
            
            <div className="img-container">
                <img src={notFoundImg} alt="Página não encontrada"/>
            </div>

            <div className="error-container">
                <Link to="/" className="back">
                    <h2>Voltar para Home.</h2>
                </Link>
            </div>
        </div>
    );
}

export default ErrorPage;