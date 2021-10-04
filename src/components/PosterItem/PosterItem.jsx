import React from "react";
import {Card, CardContent, CardMedia, Typography} from "@material-ui/core";
import './PosterItem.css'

function PosterItem(props) {
    const { name, poster, } = props;

    return (
        <li className="posters__item">

            <Card
                sx={{
                    height: '100%',

                }}
            >
                <CardMedia
                    image={poster}
                    component="img"
                    alt={name}
                    title={name}
                    sx={{height: 240,objectFit:'contain', mt: 10,}}
                />
                <CardContent>
                    <Typography
                        variant="h6"
                        component="h3"
                    >
                        {name}
                    </Typography>
                </CardContent>
            </Card>

        </li>
    );

}

export default PosterItem;