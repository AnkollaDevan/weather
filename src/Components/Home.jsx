import umbrella_icon from '../assets/umbrella.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'; 
import './Home.css'




function Home() {
    return (
        <div className='body-main'>
            <div className='body'>
                <div className="home-div">
                    <div className="umb-img" >
                        <img src={umbrella_icon} />
                    </div>
                    <div id="heading">
                        <h1>WEATHER NOW</h1>
                    </div>
                    <div>
                        <Link to={'/weather'}>
                            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow-icon"/>
                        </Link>
                        
                    </div>

                </div>
            </div >


        </div>

    )
}


export default Home;