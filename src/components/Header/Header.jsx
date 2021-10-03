import React from "react";
import {Avatar, Button, Snackbar} from "@material-ui/core";
import author from '../../images/avatar.jpg';
import "./Header.css";


function Header({handleClick, open, handleClose, action}) {

    return (
        <header className="header">
            <Avatar alt="Автор" src={author} sx={{mt: 10,}}/>
            <h4 className="header__title">Проект с постерами</h4>
            <Button onClick={handleClick}>Это необязательно, но можно нажать на кнопку</Button>
            <Snackbar open={open}
                      autoHideDuration={6000}
                      onClose={handleClose}
                      message="Note archived"
                      action={action}/>

        </header>
    );
}


export default Header;