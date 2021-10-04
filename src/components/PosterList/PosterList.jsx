import React from "react";
import PosterItem from "../PosterItem/PosterItem";
import './PosterList.css';

function PosterList({titleText, postersRender}) {
    return (
        <section className="posters">
            <h3 className="posters__title">{titleText}</h3>
            <ul className="posters__list">
                {postersRender.map(item => (
                        <PosterItem
                            poster={item.image}
                            name={item.name}
                            key={item.id}
                        />
                    )
                )}
            </ul>
        </section>
    );

}

export default PosterList;