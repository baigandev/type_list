import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <div id="header">
        <div className="container ">
        <div className="header">
        <Link to="/">
        <h1 className="h1">Motion</h1>
            </Link>
            <Link to="/hero">
    <p className="p">Пользователи</p>
        </Link>

        <div className="header-select">
    <select className="select">
        <option>Эрлан Жусупов</option>
    </select>
    <p className="text">менеджер</p>
        </div>
        </div>
        </div>
        </div>
);
};

export default Header;
