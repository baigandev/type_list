import React from 'react';
import AddInformation from "./AddInformation";

const Add: React.FC = () => {


    return (
        <div id="add">
            <div className="container">
                <div className="add">
                    <p className={"test"}>Добавить нового пользователя</p>
                    <AddInformation />
                </div>
            </div>

        </div>
    );
};

export default Add;


