import React from 'react';

import './WeatherCard.scss'

interface WeatherCardProps {
    name:string;
    country:string;
    temp:number;
    weather:string;
}

const WeatherCard: React.FC<WeatherCardProps> = (props) => {

    const dateBuilder = (d:Date) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
      }

    return (
        <div className='card'>
          <div className="location-box">
            <div className="location">{props.name}, {props.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(props.temp)}°c
            </div>
            <div className="weather">{props.weather}</div>
          </div>
        </div>
    )
}

export default WeatherCard