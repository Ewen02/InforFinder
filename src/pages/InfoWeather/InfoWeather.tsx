import { useEffect, useState } from "react";
import { BasicButton, Header, WeatherCard } from "../../components/indexComponents";
import { InfoFinder } from "../../components/tools/InfoFinder"


import './InfoWeather.scss';

const InfoWeather = () => {
    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState<InfoFinder.Open_Weather.WeatherData>();

    const searchCountries = async () => {
        const response = await InfoFinder.Open_Weather.GetWeather(query);
        setWeather(response);
    };

    useEffect(() => {
        console.log(weather);
    }, [weather]);

    return (
        /// TODO : faire une carte en cas d'erreur
        <>
            <Header title="Recherche de weather"></Header>
            <section className="form-search">
                <input type="text" placeholder="Search weather countrie..." onChange={(e) => setQuery(e.target.value)}/>
                <BasicButton
                    text="Find"
                    onClick={searchCountries}
                />
            </section>
            <section>
                {
                    weather! ?
                        <WeatherCard 
                            name={weather.name} 
                            country={weather.sys.country} 
                            temp={weather.main.temp} 
                            weather={weather.weather[0].main}
                        />
                    : null
                }
            </section>
        </>
    )
}

export default InfoWeather;