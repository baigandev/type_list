import React from 'react';
import { useSelector } from 'react-redux';

const Table: React.FC = () => {
    const { fio, work, weight, height, res } = useSelector((state: any) => state.inputValue);

    return (
        <div className="container">
            <table id="table" className="table">
                <thead>
                <tr className="tr">
                    <th>Дата регистрации</th>
                    <th>ФИО</th>
                    <th>Работа</th>
                    <th>Вес тела</th>
                    <th>Рост</th>
                </tr>
                </thead>
                <tbody>
                <tr className="tr">
                    <td>{res}</td>
                    <td>{fio}</td>
                    <td>{work}</td>
                    <td>{weight}</td>
                    <td>{height}</td>
                </tr>
                <tr className="tr">
                    <td>{res}</td>
                    <td>{fio}</td>
                    <td>{work}</td>
                    <td>{weight}</td>
                    <td>{height}</td>
                </tr>
                <tr className="tr">
                    <td>{res}</td>
                    <td>{fio}</td>
                    <td>{work}</td>
                    <td>{weight}</td>
                    <td>{height}</td>
                </tr>
                <tr className="tr">
                    <td>{res}</td>
                    <td>{fio}</td>
                    <td>{work}</td>
                    <td>{weight}</td>
                    <td>{height}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;