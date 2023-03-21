import React from "react";
import { IButtonProps, IMovieCard } from "../interfaces";

import './CardMovie.scss'

const MovieCard: React.FC<IMovieCard> = (props) => {
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