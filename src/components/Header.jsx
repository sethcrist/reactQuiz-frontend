import React from 'react';
import './component.css'
import { NavLink, useNavigate } from 'react-router-dom';
import MainLogo from '../assets/clever-cards.png'

const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="header-logo">
                    <div className="header-left">
                        <img
                            src={MainLogo}
                            alt="Stacked paper"
                            className="Mainlogo"
                        />
                        <h1 className="header">Clever<span className="header-cards">Cards</span></h1>
                    </div>

                    <div className="header-right">
                        <h2 className="header">UserName</h2>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Header;