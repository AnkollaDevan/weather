import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './Components/Weather'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import './App.css'
import umbrella_icon from './assets/umbrella.png'

function App() {
  const [weather, setWeather] = useState(true);

  const goToWeather = () =>  {

      setWeather(false);

  }


  return (
      <div id='body-main'>
          {weather ? (
              <div className='body'>
                  <div className="home-div">
                      <div className="umb-img" >
                          <img src={umbrella_icon} />
                      </div>
                      <div id="heading">
                          <h1>WEATHER NOW</h1>
                      </div>
                      <div>
                          <FontAwesomeIcon icon={faCircleArrowRight} className="arrow-icon" onClick={() => goToWeather()}/>
                      </div>

                  </div>
              </div > ) : <Weather/>}


      </div>

  )
}

export default App
