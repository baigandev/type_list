import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setInputValue } from '../../Redux/Actions';

const AddInformation: React.FC = () => {
    const dispatch = useDispatch();
    const [fio, setFio] = useState('');
    const [work, setWork] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [res,setRes] = useState('')
    const handleAdd = () => {
        dispatch(setInputValue({ fio, work, weight, height,res }));
    };

    const handleFioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFio(event.target.value);
    };
    const handleResChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRes(event.target.value);
    };
    const handleWorkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWork(event.target.value);
    };

    const handleWeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWeight(event.target.value);
    };

    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(event.target.value);
    };

    return (
        <div className="toDo">
            <div className="toDoLeft">
                <div className="information">
                    <div className="user">
                        <p>Дата регистрации *</p>
                        <input type="text" className="input-user" value={res} onChange={handleResChange} />
                    </div>
                    <div className="user">
                        <p>ФИО *</p>
                        <input type="text" className="input-user" value={fio} onChange={handleFioChange} />
                    </div>
                    <div className="user">
                        <p>РАБОТА *</p>
                        <input type="text" className="input-user" value={work} onChange={handleWorkChange} />
                    </div>
                    <div className="user">
                        <p>ВЕС ТЕЛА *</p>
                        <input type="text" className="input-user" value={weight} onChange={handleWeightChange} />
                    </div>
                    <div className="user">
                        <p>рост *</p>
                        <input type="text" className="input-user" value={height} onChange={handleHeightChange} />
                    </div>
                </div>
                <button onClick={handleAdd} className="but">Добавить</button>
            </div>
            <img width="500px" height="500px" style={{
                marginBottom: "50px"
            }} src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" alt="" />
        </div>
    );
};

export default AddInformation;
