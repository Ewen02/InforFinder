import { useEffect, useState } from "react";
import { BasicButton } from "../../components/indexComponents";
import { InfoFinder } from "../../components/tools/InfoFinder"


import "./InfoCountry.scss";

const InforCountry = () => {
    const [query, setQuery] = useState("");
    //const [countrie, setCountrie] = useState<InfoFinder.Tvmaze.Movie[]>([]);

    const searchCountries = async () => {
        const response = await InfoFinder.RestCountries.GetCountrie(query);
        console.log(response);
        //setMovies(response);
    };

    useEffect(() => {
    }, []);


    return (
        <>
            <section className="header">
                <h1>Recherche de Pays</h1>
            </section>
            <section className="form-search">
                <input type="text" placeholder="Search Countrie..." onChange={(e) => setQuery(e.target.value)}/>
                <BasicButton
                    text="Find"
                    onClick={searchCountries}
                />
            </section>
        </>
    )
}

export default InforCountry;