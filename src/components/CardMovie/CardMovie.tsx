import React from "react";

import './CardMovie.scss'

interface MovieCardProps {
    name: string;
    urlImage: string;
    score: number;
    onClick?: () => void;
    className?: string;
}

const MovieCard: React.FC<MovieCardProps> = (props) => {
    return (
        <div className="container">
            <div className="carte">
                <img src={props.urlImage}/>
                <p style={{color:'white'}}>{props.name}</p>
            </div>
        </div>
    );
}

export default MovieCard;