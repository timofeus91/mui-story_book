import React from "react";
import {Avatar, Button} from "@material-ui/core";
import author from '../../images/avatar.jpg';
import "./Header.css";
import {styled} from '@mui/material/styles';


function Header({handleClick}) {



    const CustomButton = styled(Button)({
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        fontHeight: 20,
        lineHeight: 'normal',
        fontStyle: 'normal',
        fontWeight:500,
        textAlign: 'center',
        display: 'flex',
        alignItems:'flex-end',
        color: '#000000',
        padding: '8px 20px',
        margin: '0',
        border: 'none',
        backgroundColor: '#f2f2f2',
        fontFamily: [
            'Inter',
            'Arial',
            'sans-serif'
        ].join(','),
        '&:hover': {
            opacity: '0.8',
            transition: 'opacity 3s',

        },


    });

    return (
        <header className="header">
            <div className="header__container">
                <Avatar alt="Автор" src={author} sx={{ width: 54, height: 54, objectFit:'contain',}} />
                <h4 className="header__title">Мини-проект с постерами</h4>
            </div>
            <CustomButton onClick={handleClick}>Это необязательно, но можно нажать на эту кнопку</CustomButton>


        </header>
    )
        ;
}


export default Header;