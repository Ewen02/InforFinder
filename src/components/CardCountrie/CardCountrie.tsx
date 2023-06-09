import './CardCountrie.scss'

interface CountrieCardProps {
    name:string;
    capital:string;
    continents: string;
    population: number;
    urlImage: string | undefined;
}

const CountrieCard:React.FC<CountrieCardProps> = (props) => {
    return (
        <div className="container">
            <div className="carte">
                <img src={props.urlImage} alt='flag'/>
                <h3>{props.name}</h3>
                <h3>{props.capital}</h3>
                <h3>{props.continents}</h3>
                <h3>{props.population}</h3>
            </div>
        </div>
    )
}

export default CountrieCard;