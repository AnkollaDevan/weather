import './Weathercard.css'



function Weathercard({ data }) {


    return (
        <div>
            <div>
                <div className='mid-section'>
                    <div className="wea-img">
                        <img src={data.icon} />
                        <h1 className="city-name">{data.name}</h1>
                    </div>
                    <div>
                        <h1 id='temp'>{data.temperature}<span>°C</span></h1>
                        <h3 id='climate'>{data.main}</h3>
                    </div>

                </div>

                <div className="other-details">
                    <div className="wind">
                        <h3>Wind Speed</h3>
                        <span>{data.speed}km/h</span>
                    </div>
                    <div className="humidity">
                        <h3>Humidity</h3>
                        <span>{data.humidity} % </span>
                    </div>
                    <div className="feels">
                        <h3>Feels like</h3>
                        <span>{data.feels}°C</span>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Weathercard;