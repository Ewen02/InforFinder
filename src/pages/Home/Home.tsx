import { BasicButton } from "../../components/indexComponents";

import "./Home.scss"

const Home = () => {
    return (
        <>
            <BasicButton 
                text="Movies"
                onClick={() => window.location.href = "/movies"}
            />
            <BasicButton    
                text="Country"
                onClick={() => window.location.href = "/country"}
            />
            <BasicButton
                text="Country - Rest API"
                onClick={() => window.location.href = "/countryRest"}
            />
            <BasicButton
                text="Weather"
                onClick={() => window.location.href = "/weather"}
            />
            <BasicButton
                text="Music"
                onClick={() => window.location.href = "/music"}
            />
        </>
    )
}

export default Home;