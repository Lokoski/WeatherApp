import React from 'react'

function WeatherInfo(props) {
    const { temp, city, desc, tempMin, tempMax,country, icon} = props.weather
    return (
        <>
            <div className="weather-desc">
                <h3>Location</h3>
                <p>{city} / {country}</p>
                
            </div>
            <div className="weather-desc">
                <h3>Temperature</h3>
                <p>{temp} <span className="symbol"></span>F </p>
            </div>
            {/* <div className="weather-desc">
                <h3>Todays Minimum</h3>
                <p>{tempMin} <span className="symbol"></span>F</p>
            </div>
            <div className="weather-desc">
                <h3>Todays Maximum</h3>
                <p>{tempMax} <span className="symbol">F</span></p>
            </div> */}
            <div className="weather-desc">
                <h3>{desc}</h3>
              <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
            </div>
            <div className="weather-desc">
                <h4>Min: {tempMin} <span className="symbol"></span>F  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Max: {tempMax} <span className="symbol"></span>F </h4>
            </div>
        </>
    )
}

export default WeatherInfo
