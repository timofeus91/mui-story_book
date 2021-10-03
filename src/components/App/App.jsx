import React from "react";
import './App.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import PosterList from "../PosterList/PosterList";
import ResultList from "../ResultList/ResultList";
import Footer from "../Footer/Footer";


function App() {
    return (
        <div className="App">
            < Header/>
            < SearchForm/>
            < PosterList/>
            < ResultList/>
            < Footer/>
        </div>
    );
}

export default App;
