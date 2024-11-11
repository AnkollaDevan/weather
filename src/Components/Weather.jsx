import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './Weather.css'
import { useState, useRef, useEffect } from "react";
import Weathercard from "./Weathercard";
import sunny_icon from '../assets/sunny.png'
import cloudy_icon from '../assets/cloudy.png'
import cloud_icon from '../assets/cloud.png'
import mist_icon from '../assets/mist.png'
import snow_icon from '../assets/snow.png'
import rain_icon from '../assets/rain.png'
import thunder_icon from '../assets/thunder.png'




function Weather() {


    const [weatherdata, setWeather] = useState();

    const [city, setCity] = useState("");

    const [error, setError] = useState(false);

    const input = useRef();


    const images = {
        "01d": sunny_icon,
        "01n": sunny_icon,
        "11d": thunder_icon,
        "11n": thunder_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon,
        "50d": mist_icon,
        "50n": mist_icon,
        "02d": cloudy_icon,
        "02n": cloudy_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": cloud_icon,
        "04n": cloud_icon
    }




    const fetchData = async (city) => {

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${'7f641648b881eb2b91567005fb28589f'}`);

            const data = await response.json();

            console.log(data);

            const icon = images[data.weather[0].icon]

            if(data.cod === 200) {
                const weatherData = {
                    temperature: Math.floor(data.main.temp),
                    humidity: data.main.humidity,
                    feels: data.main.feels_like,
                    name: data.name,
                    main: data.weather[0].main,
                    icon: icon,
                    speed: data.wind.speed
                }

                setWeather(weatherData);

            }else {
                setError(true);
            }

            

            
        }
        catch (error) {
            console.log("error");
        }



    };



    return (
        <div className="main-div">
            <div className="weather-container">
                <div className="search-bar">
                    <input ref= {input} type="text" placeholder="Enter City Name" />
                    <FontAwesomeIcon className='mag-icon' icon={faMagnifyingGlass} onClick={() => fetchData(input.current.value)} />
                </div>
                {weatherdata ? <Weathercard data={weatherdata}/>: error ? (
                    <div>
                        <h1>No Data Found</h1>
                    </div>

                 ): (<div> </div>
                    
                )};

            </div>
        </div>
    )
}

export default Weather;