import React from "react";
import './App.css';
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import PosterList from "../PosterList/PosterList";
import Footer from "../Footer/Footer";
import {Snackbar, IconButton} from "@material-ui/core";
import CloseIcon from '@mui/icons-material/Close';
import {posters} from "../../utils/posters";


function App() {
    console.log(posters);
    const [openSnackBar, setOpenSnackBar] = React.useState(false);
    const [postersArray, setPostersArray] = React.useState([]);
    const [posterTitleText, setPosterTitleText] = React.useState('');
    const [search, setSearch] = React.useState('');


    React.useEffect(() => {
        setPostersArray(posters);
    }, []);

    React.useEffect(() => {
        if (postersArray.length > 0) {
            setPosterTitleText('Ниже прекрасные постеры');
        } else {
            setPosterTitleText('Прости, но такого постера тут нет');
        }
    });

    const handleChange = (e) => {
        if (!e.target.value) {
            setPostersArray(posters);
            setSearch('');
            return;
        }
        setSearch(e.target.value);
        setPostersArray(
            posters.filter((poster) =>
                poster.name.toLowerCase().includes(e.target.value.toLowerCase())
            ));
    };
    /*
        const handleCloseSnackBar = () => {
            setOpenSnackBar(false);
        };


        const handleCLickSnackBar = () => {
            setOpenSnackBar(true);
        }; */

    const handleToggleSnackBar = () => {
        if (openSnackBar) {
            setOpenSnackBar(false);
        } else {
            setOpenSnackBar(true);
        }
    };


    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleToggleSnackBar}
                sx={{
                    ":hover": {
                        opacity: 0.8,
                    },
                    fontWeight: 'regular',

                }}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>

        </React.Fragment>
    );


    return (
        <div className="App">
            < Header
                handleClick={handleToggleSnackBar}
            />
            < SearchForm
                value={search}
                onChange={handleChange}/>
            < PosterList
                titleText={posterTitleText} postersRender={postersArray}/>

            < Footer/>
            <Snackbar open={openSnackBar}
                      autoHideDuration={6000}
                      onClose={handleToggleSnackBar}
                      message="И ты получил результат! Теперь можешь смело закрывать"
                      action={action}
            />
        </div>
    );
}

export default App;
