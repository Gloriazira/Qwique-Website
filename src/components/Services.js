// import limage from '../assets/limage.png';
import googleStore from '../assets/googleps.png';
import appleStore from '../assets/appleps.png';
import nigeria from '../assets/nigeria.png';
import cameroon from '../assets/cameroon.png';
import easy from '../assets/wwo-easy.png';
import fast from '../assets/wwo-fast.png';
import quality from '../assets/wwo-quality.png';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import i18next from '../i18n';

const Services = () => {

    AOS.init();
    AOS.refresh();

    const myRow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    };

    const myColumn = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
    }

    const myHeadertwo = {
        fontStyle: 'normal',
        fontSize: '40px',
        lineHeight: '56px',
        textAlign: 'center',
    }


    return ( 
        <div className="services" >
                <div style={myColumn}>
                    <h2 style={myHeadertwo}>{i18next.t('what_we_offer')}</h2>
                    <div className="list-of-services">

                        <Row style={myRow}>
                            <Col className="box" style={myColumn} data-aos="fade-right" data-aos-duration="2000">
                                <img src={easy} alt="easy-order" />
                                <h4>{i18next.t('easy_order')}</h4>
                                <p>{i18next.t('easy_order_description')}</p>
                            </Col>
                            <Col className="box" style={myColumn} data-aos="zoom-in" data-aos-duration="2000">
                                <img src={fast} alt="fast-delivery" />
                                <h4>{i18next.t('fast_delivery')}</h4>
                                <p>{i18next.t('fast_delivery_description')}</p>
                            </Col>
                            <Col className="box" style={myColumn} data-aos="fade-left" data-aos-duration="2000">
                                <img src={quality} alt="quality" />
                                <h4>{i18next.t('variety_quality')}</h4>
                                <p>{i18next.t('variety_quality_description')}</p>
                            </Col>
                        </Row>

                    </div>
                </div>
            </div>
     );
}
 
export default Services;