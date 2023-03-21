import { useEffect, useState } from "react";
import { BasicButton } from "../../components/indexComponents";
import { InfoFinder } from "../../components/tools/InfoFinder"

import "./InfoMovies.scss"

const InforMovies = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState<InfoFinder.Tvmaze.MoviesResponse | InfoFinder.ErrorResponse>();

    useEffect(() => {
        console.log(movies);
    }, [movies]);

    const searchMovies = async () => {
        await InfoFinder.Tvmaze.GetMovies(query).then(r => {
            setMovies(r);
        })
    }

    /// TODO : faire des component Form  https://www.youtube.com/watch?v=oYuybfkwGx4&ab_channel=Grafikart.fr
    return (
        <>
            <section className="header">
                <h1>Movies Finder</h1>
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
                        // catalog.map((movie) => {
                        //     return (CardMovie(movie.show.image.original, movie.score))
                        // })
                    }
                </div>
            </section>
        </>
    );
}

export default InforMovies;