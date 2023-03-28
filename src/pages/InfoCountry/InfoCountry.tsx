import { useEffect, useState } from "react";
import { BasicButton, CountrieCard, Header } from "../../components/indexComponents";
import { InfoFinder } from "../../components/tools/InfoFinder"


import "./InfoCountry.scss";

const InforCountry = () => {
    const [query, setQuery] = useState("");
    const [countrie, setCountrie] = useState<InfoFinder.API_Ninja.CountryData>();

    const searchCountries = async () => {
        const response = await InfoFinder.API_Ninja.GetCountrie(query);
        setCountrie(response);
    };

    useEffect(() => {
    }, [countrie]);


    return (
        <>
            <Header title="Recherche de Pays"></Header>
            <section className="form-search">
                <input type="text" placeholder="Search Countrie..." onChange={(e) => setQuery(e.target.value)}/>
                <BasicButton
                    text="Find"
                    onClick={searchCountries}
                />
            </section>
            <section>
                <div className="countrie">

                    {
                        countrie! ?
                            <CountrieCard 
                            name={countrie.name} 
                            capital={countrie.capital} 
                            continents={countrie.region} 
                            population={countrie.population}
                            />
                        : null
                    }
                </div>
            </section>
        </>
    )
}

export default InforCountry;