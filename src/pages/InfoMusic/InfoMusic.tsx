import { useEffect, useState } from "react";
import { BasicButton, Header } from "../../components/indexComponents";
import { InfoFinder } from "../../components/tools/InfoFinder"

import './InfoMusic.scss'

const MusicInfo = () => {
    const [query, setQuery] = useState("");
    const [music, setMusic] = useState<InfoFinder.Spotify.SpotifyData>();

    const searchCountries = async () => {
        const response = await InfoFinder.Spotify.GetMusic(query);
        setMusic(response);
    };

    useEffect(() => {
        console.log(music);
    }, [music]);


    return (
        <>
            <Header title="Recherche de Music"></Header>
            <section className="form-search">
                <input type="text" placeholder="Search music..." onChange={(e) => setQuery(e.target.value)}/>
                <BasicButton
                    text="Find"
                    onClick={searchCountries}
                />
            </section>
            <section>
                <div className="music">

                    {
                        music! ?
                            "toto"
                        : null
                    }
                </div>
            </section>
        </>
    )
}

export default MusicInfo