import React from "react";
import './App.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import PosterList from "../PosterList/PosterList";
import ResultList from "../ResultList/ResultList";
import Footer from "../Footer/Footer";


function App() {

    const [openSnackBar, setOpenSnackBar] = React.useState(false);

    const action = 'JustStringYet';

    const handleCloseSnackBar = () => {

    };

    const handleCLickSnackBar = () => {
        setOpenSnackBar(true);
    };
    return (
        <div className="App">
            < Header
                handleClick={handleCLickSnackBar}
                open={openSnackBar}
                handleClose={handleCloseSnackBar}
                action={action}/>
            < SearchForm/>
            < PosterList/>
            < ResultList/>
            < Footer/>
        </div>
    );
}

export default App;
