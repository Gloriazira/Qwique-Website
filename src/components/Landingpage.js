// import limage from '../assets/limage.png';
import googleStore from '../assets/googleps.png';
import appleStore from '../assets/appleps.png';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// // import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import i18next from '../i18n';


const Mainbody = () => {

    AOS.init();
    AOS.refresh();

    const myRow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    };

    


    return (
        <div>
            <div className="container landing-page" style={myRow}>
                <div className="landing-text" >

                    <h1 >
                        <span> {i18next.t('header_title_one')}</span> {' '} <span style={{ color: '#FF7011' }}>{i18next.t('header_title_two')}</span>{' '}
                        {<br />}
                        <span>{i18next.t('header_title_three')}</span> {' '} <span style={{ color: '#FF7011' }}>{i18next.t('header_title_four')}</span>
                    </h1>
                    <div className="landingimage one" data-aos="fade-left" data-aos-duration="3000" data-aos-easing="linear">
                        {/* <img src={limage} alt="" className="limage" /> */}
                    </div>
                    <p data-aos="fade-up" data-aos-duration="2200" style={{
                        width: "523px",
                    }}> {i18next.t('header_description')}</p>
                    <h6>{i18next.t('coming_soon_on')}</h6>
                    <div className="row" style={{marginBottom: "10%"}}>
                        <img src={googleStore} alt="" className="play-store" />
                        <img src={appleStore} alt="" className="play-store" />

                    </div>
                </div>

                <div className="landingimage" data-aos="fade-left" data-aos-duration="3000" data-aos-easing="linear">
                    {/* <img src={limage} alt="" className="limage" /> */}
                </div>
            </div>

        </div>
    );
}

export default Mainbody;