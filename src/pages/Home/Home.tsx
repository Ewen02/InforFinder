import { BasicButton } from "../../components/indexComponents";

import "./Home.scss"

const Home = () => {

    const goToMovies = () => {
        window.location.href = "/movies";
    }

    const goToCountry = () => {
        window.location.href = "/country";
    }

    const goToCountryRest = () => {
        window.location.href = "/countryRest";
    }

    return (
        <>
            <BasicButton 
                text="Movies"
                onClick={goToMovies}
            />
            <BasicButton    
                text="Country"
                onClick={goToCountry}
            />
            <BasicButton
                text="Country - Rest API"
                onClick={goToCountryRest}
            />
        </>
    )
}

export default Home;