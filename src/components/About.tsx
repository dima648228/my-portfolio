import {useState, useEffect} from "react";
import avatar from '../images/ava.jpg';
import animateString from "../utils/stringUtils";
import text_data from '../text_data.json'
import config from '../config.json'

const About = () => {

    const [generalInfoHeader, setGeneralInfoHeader] = useState('') // About Me

    const [offerOpened, setOfferOpened] = useState(false);
    const [currentTime, setCurrentTime] = useState('');


    const getStateColor = () => {
        return offerOpened === false ? [248, 21, 21, 0.8] : [37, 236, 43, 0.8]
    }

    const getStateText = () => {
        return offerOpened === true ? "Opened" : "Closed"
    }

    const getTimeGMT3 = () => {
        const utcTime = new Date();
        const targetTimezone = "Europe/Kiev";

        const localizedTime = new Intl.DateTimeFormat("en-US", {
            timeZone: targetTimezone,
            timeStyle: "medium",
        }).format(utcTime);

        return localizedTime;
    }

    useEffect(() => {
        const runAnimation = async () => {
            await animateString('About Me', setGeneralInfoHeader, 100);
        };

        runAnimation();
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getTimeGMT3());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setOfferOpened(config.IS_OFFERS_AVAILABLE)
    }, []);

    return (
        <div className="block-flex-start block-center block-1">
          <div className="top-section">
            <div className="photo">
                <div className="avatar-wrapper">
                    <img src={avatar} alt="Profile" className="avatar"/>
                </div>
            </div>

            <div className="right-block">
                <p style={{ fontSize: '50px' }}>
                    {generalInfoHeader}
                </p>

                <p className="list-item"><strong>Age:</strong> <span className="about-span">16</span></p>

                <p className="list-item"><strong>Living In:</strong> <span className="gradient-country about-span">Ukraine</span> | GMT+3 | <span className="gradient-time about-span">{currentTime ? currentTime : "Loading..."}</span></p>
                
                <p className="list-item"><strong>Experience:</strong> <span className="about-span">Game/Bot/Web Development</span></p>
                <p className="list-item"><strong>Email:</strong> <span className="about-span">vysnakd5@gmail.com</span></p>
                <p className="list-item"><strong>Offers:</strong> <span className="about-span offer-status" style={{ color: `rgba(${getStateColor().join(',')})` }}>{getStateText()}</span></p>
            </div>

            <div className="bio-block">
                <p className="about-span" style={{ fontSize: '20px' }}>
                  {text_data.bio}
                </p>
            </div>
          </div>

          <div className="bottom-block">
            <div className="sub-block">
                <h1>GameDev Experience</h1>
                <p className="about-span" style={{fontSize:'20px'}}>{text_data.experience.gamedev}</p>
            </div>

            <div className="sub-block">
                <h1>WebDev Experience</h1>
                <p className="about-span" style={{fontSize:'20px'}}>{text_data.experience.web}</p>
            </div>

            <div className="sub-block">
                <h1>Other Experience</h1>
                <p className="about-span" style={{fontSize:'20px'}}>{text_data.experience.other}</p>
            </div>
        </div>
    </div>
    )
}

export default About;
