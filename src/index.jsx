import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App/App";
import {createTheme, ThemeProvider} from "@material-ui/core";

const theme = createTheme({
    spacing:1
})

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

