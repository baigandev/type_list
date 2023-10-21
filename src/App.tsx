import './App.css';
import Header from "./component/Header";
import {Route, Routes} from "react-router-dom";
import Add from "./component/Add";
import Hero from "./component/Hero";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path={"/add"} element={ <Add/> }/>
                <Route path={"/hero"} element={ <Hero/> }/>
            </Routes>
        </div>
    );
}

export default App;





