import { BasicButton } from "../../components/indexComponents";

import "./Home.scss"

const Home = () => {

    const goToMovies = () => {
        window.location.href = "/movies";
    }

    const goToCountry = () => {
        window.location.href = "/country";
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
        </>
    )
}

export default Home;