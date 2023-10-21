import React from 'react';
import { Link } from 'react-router-dom';
import Table from "../Table";

const Hero: React.FC = () => {
    return (
        <div>

            <div id="hero">
                <div className="container">
                    <div className="hero">

                        <div className="hero-title">
                            <h1>Пользователи</h1>
                            <div className="hero-info">
                                <input type="search" className={"input"} placeholder={"Найти пользователя по ФИО"} />
                                <Link to="/add">
                                    <button className="add-user">Добавить</button>
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
                <Table />

            </div>


        </div>
    );
};

export default Hero;