import { useEffect, useState } from "react";
import { BasicButton, CountrieCard, Header } from "../../components/indexComponents";
import { InfoFinder } from "../../components/tools/InfoFinder"

import './../InfoCountry/InfoCountry.scss'

const InforCountryRest = () => {
const [query, setQuery] = useState("");
    const [countrie, setCountrie] = useState<InfoFinder.Rest_Countrie.CountryData>();

    const searchCountries = async () => {
        const response = await InfoFinder.Rest_Countrie.GetCountrie(query);
        setCountrie(response);
    };

    useEffect(() => {
        console.log(countrie);
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
                            name={countrie.name.common} 
                            capital={countrie.capital[0]} 
                            continents={countrie.continents[0]} 
                            population={countrie.population} 
                            urlImage={countrie.flags.svg}
                        />
                        : null
                    }
                </div>
            </section>
        </>
    )
}

export default InforCountryRest