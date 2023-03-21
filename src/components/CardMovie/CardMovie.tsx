import React from "react";

import './CardMovie.scss'

interface MovieCard {
    name: string;
    urlImage: string;
    score: number;
    onClick?: () => void;
    className?: string;
}

const MovieCard: React.FC<MovieCard> = (props) => {
    return (
        <div className="container">
            <div className="carte">
                <img src={props.urlImage}/>
                <p>{props.score}</p>
            </div>
        </div>
    );
}

export default MovieCard;