import React from "react";
import {TextField} from "@material-ui/core";


function SearchForm({value, onChange}) {
    return (
        <TextField
            label="Здесь поиск по постерам"
            variant="standard"
            fullWidth
            type="search"
            color="special"
            value={value}
            onChange={onChange}
            sx={{


                m: '20px auto 20px',
                maxWidth: 1140,
            }}/>
    );
}


export default SearchForm;