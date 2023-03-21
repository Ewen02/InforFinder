import { useEffect, useState } from "react";
import { BasicButton, MovieCard } from "../../components/indexComponents";
import { InfoFinder } from "../../components/tools/InfoFinder"

import "./InfoMovies.scss"

const InforMovies = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState<InfoFinder.Tvmaze.Movie[]>([]);

    const searchMovies = async () => {
        const response = await InfoFinder.Tvmaze.GetMovies(query);
        setMovies(response);
    };

    useEffect(() => {
    }, [movies]);

    return (
        <>
            <section className="header">
                <h1>Recherche de films</h1>
            </section>
            <section className="form-search">
                <input type="text" placeholder="Search movies..." onChange={(e) => setQuery(e.target.value)}/>
                <BasicButton
                    text="Find"
                    onClick={searchMovies}
                />
            </section>
            <section className="show-catalog">
                <div className="movies">
                    {
                        movies.length ? movies.map((movie) => {
                            return (
                                <MovieCard 
                                    key={movie.show.id} 
                                    name={movie.show.name} 
                                    score={movie.score} 
                                    urlImage={movie.show.image && movie.show.image.medium ? movie.show.image.medium : ""}
                                />
                            );
                        }) : null
                    }
                </div>
            </section>
        </>
    );
};


export default InforMovies;