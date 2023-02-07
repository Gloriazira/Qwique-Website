import phone from '../assets/phone-mockup.png'
import googleStore from '../assets/googleps.png';
import appleStore from '../assets/appleps.png';


// import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import i18next from '../i18n';

const comingSoon = () => {

    AOS.init();
    AOS.refresh();

    

    const myColumn = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    }

    
    const comingSoon = {
        margin: "5% 0 3% 0",
        textAlign: "center",
        
    }

    


    return ( 
        <div className="coming-soon" id='start'>
                <div style={myColumn}>
                    <h2 style={comingSoon}>
                        {i18next.t('coming_soon')}
                    </h2>

                    <p style={{marginBottom: "4%", letterSpacing: "-0.01em", textAlign: "center"}}>
                        {i18next.t('coming_soon_description_one')}

                    </p>
                    <img src={phone} alt="" style={{ width: "20%" }} data-aos="zoom-in" data-aos-duration="2000" />
                    <div className="row" >
                        <img src={googleStore} style={{ width: "254.26px", margin:"0 10px"}} alt="" className="play-store" />

                        <img src={appleStore} style={{ width: "254.26px", margin:"0 10px" }} alt="" ClassName="play-store" />

                    </div>
                </div>
            </div>
     );
}
 
export default comingSoon;