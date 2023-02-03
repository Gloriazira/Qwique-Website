// import limage from '../assets/limage.png';
import googleStore from '../assets/googleps.png';
import appleStore from '../assets/appleps.png';
import nigeria from '../assets/nigeria.png';
import cameroon from '../assets/cameroon.png';
import easy from '../assets/wwo-easy.png';
import fast from '../assets/wwo-fast.png';
import quality from '../assets/wwo-quality.png';
import phone from '../assets/phone-mockup.png';
import chef from '../assets/hww-restaurant.png';
import profile from '../assets/hww-createacct.png';
import uploadmenu from '../assets/hww-uploadmenus.png';
import manageorders from '../assets/hww-manageorder.png';
import cart from '../assets/hww-cart.png';
import location from '../assets/hww-location.png';
import card from '../assets/hww-card.png';
import customer from '../assets/customer.png';
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import 'animate.css';
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

    const comingSoon = {
        margin: "3% 10%",
        textAlign: "center",
        
    }

    const mySpan = {
        fontFamily: "Inter",
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "60px",
        color: "#2E2E2E",
        margin: "5% 0"
    }


    return (
        <>
            <div className="container landing-page" style={myRow}>
                <div className="landing-text" >

                    <h1 >
                        <span> {i18next.t('header_title_one')}</span> {' '} <span style={{ color: '#FF7011' }}>{i18next.t('header_title_two')}</span>{' '}
                        {<br />}
                        <span>{i18next.t('header_title_three')}</span> {' '} <span style={{ color: '#FF7011' }}>{i18next.t('header_title_four')}</span>
                    </h1>
                    <div className="landingimage one" data-aos="fade-left" data-aos-duration="3000" data-aos-easing="linear">
                        {/* <img src={limage} alt="" ClassName="limage" /> */}
                    </div>
                    <p data-aos="fade-up" data-aos-duration="2200"> {i18next.t('header_description')}</p>
                    <p style={{
                        fontWeight: '700',

                        color: '#2E2E2E', margin: '5% 0',
                    }}>{i18next.t('coming_soon_on')}</p>
                    <div className="row" style={{marginBottom: "10%"}}>
                        <img src={googleStore} alt="" ClassName="play-store" />
                        <img src={appleStore} alt="" ClassName="play-store" />

                    </div>
                </div>

                <div className="landingimage" data-aos="fade-left" data-aos-duration="3000" data-aos-easing="linear">
                    {/* <img src={limage} alt="" ClassName="limage" /> */}
                </div>
            </div>

            <div className="nationality" style={myRow}>
                <div className="row" >
                    <img src={nigeria} alt="" className="country" />
                    <img src={cameroon} alt="" ClassName="country" />

                </div>
            </div>

            <div className="services" >
                <div style={myColumn}>
                    <h2 style={myHeadertwo}>{i18next.t('what_we_offer')}</h2>
                    <div className="list-of-services" style={{ margin: '5% auto' }} >

                        <Row style={myRow}>
                            <Col className="box" style={myColumn} data-aos="fade-right" data-aos-duration="2000">
                                <img src={easy} alt="easy-order" />
                                <h3>{i18next.t('easy_order')}</h3>
                                <p>{i18next.t('easy_order_description')}</p>
                            </Col>
                            <Col className="box" style={myColumn} data-aos="zoom-in" data-aos-duration="2000">
                                <img src={fast} alt="fast-delivery" />
                                <h3>{i18next.t('fast_delivery')}</h3>
                                <p>{i18next.t('fast_delivery_description')}</p>
                            </Col>
                            <Col className="box" style={myColumn} data-aos="fade-left" data-aos-duration="2000">
                                <img src={quality} alt="quality" />
                                <h3>{i18next.t('variety_quality')}</h3>
                                <p>{i18next.t('variety_quality_description')}</p>
                            </Col>
                        </Row>

                    </div>
                </div>
            </div>

            <h2 style={myHeadertwo}>{i18next.t('how_we_work')}</h2>

            <div className="customer-restaurants" style={{ background: "#ffffff" }}>

                <div className="cust-rest" style={myRow}>

                    <div>
                        <h3>{i18next.t('for_customers')}</h3>{<br />}

                        <div className="chef-image-one" data-aos="zoom-in" data-aos-duration="3000">
                            <img src={customer} alt="" />
                        </div>

                        <p className='cust-desc'>{i18next.t('for_customers_description')}</p>
                        <div style={myRow}>
                            <hr className="customer-hr" />
                            <ul className='rest-icon'>
                                <li>
                                    <div className='steps'>
                                        <img src={cart} alt="create-account" />
                                    </div>
                                    <div data-aos="fade-right"
                                        data-aos-easing="linear"
                                        data-aos-duration="1000">
                                        <p > <span style={mySpan}> {i18next.t('place_order')}</span>
                                        </p>
                                        <p style={{ width: "200px" }}>{i18next.t('place_order_description')}</p>

                                    </div>
                                </li>
                                <li>
                                    <div className='steps'>
                                        <img src={location} alt="create-account" />
                                    </div>

                                    <div data-aos="fade-right"
                                        data-aos-easing="linear"
                                        data-aos-duration="1100">
                                        <p > <span style={mySpan}> {i18next.t('drop_location')}</span></p>

                                        <p className='location' style={{ width: "250px" }}>{i18next.t('drop_location_description')}</p>

                                    </div>
                                </li>
                                <li>
                                    <div className='steps'>
                                        <img src={card} alt="create-account" />
                                    </div>

                                    <div data-aos="fade-right"
                                        data-aos-easing="linear"
                                        data-aos-duration="1200">
                                        <p > <span style={mySpan}> {i18next.t('flexible_payment')} </span>
                                        </p>
                                        <p className='money' style={{ width: "250px" }}>{i18next.t('flexible_payment_description')}</p>

                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="chef-image" data-aos="zoom-in" data-aos-duration="3000">
                        <img src={customer} alt="" />
                    </div>

                </div>
            </div>

            <div className="customer-restaurants">

                <div className="cust-rest " style={myRow}>
                    <div className="chef-image one" >
                        <img src={chef} alt="" data-aos="zoom-in" data-aos-duration="3000" />
                        <p data-aos="fade-in" data-aos-duration="1300" style={{
                            fontWeight: "400",
                            fontSize: "20px",
                            lineHeight: "30px",
                            marginTop: "20px",
                            color: "#5D5D5D",
                        }}>{i18next.t('contact_title')} <span>
                                <a href="mailto:info@qwique.com " style={{
                                    textDecoration: "none", fontWeight: "700",
                                    color: "#FF7011",
                                }}> info@qwique.com </a></span> {i18next.t('contact_info')}</p>
                    </div>

                    <div>
                        <h3>{i18next.t('for_restaurants')}</h3>{<br />}
                        <div className="chef-image-one" >
                            <img src={chef} alt="" data-aos="zoom-in" data-aos-duration="3000" />
                        </div>

                        <p className='cust-desc'>{i18next.t('for_restaurants_description')}</p>
                        <div style={myRow}>
                            <hr />
                            <ul className='rest-icon'>
                                <li>
                                    <div className='steps'>
                                        <img src={profile} alt="create-account" />
                                    </div>
                                    <div data-aos="fade-right"
                                        data-aos-easing="linear"
                                        data-aos-duration="1000">
                                        <p > <span style={mySpan}> {i18next.t('create_account')} </span> </p>
                                        <p style={{ width: "200px" }}>{i18next.t('create_account_description')}</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='steps'>
                                        <img src={uploadmenu} alt="create-account" />
                                    </div>
                                    <div data-aos="fade-right"
                                        data-aos-easing="linear"
                                        data-aos-duration="1200">
                                        <p > <span style={mySpan}> {i18next.t('upload_menu')} </span>
                                        </p>
                                        <p style={{ width: "200px" }}>{i18next.t('upload_menu_description')}</p>
                                    </div>

                                </li>
                                <li>
                                    <div className='steps'>
                                        <img src={manageorders} alt="create-account" />
                                    </div>


                                    <div data-aos="fade-right"
                                        data-aos-easing="linear"
                                        data-aos-duration="1200">
                                        <p > <span style={mySpan}> {i18next.t('manage_orders')} </span>
                                        </p>
                                        <p className='order' style={{ width: "250px" }}>{i18next.t('manage_orders_description')}</p>
                                    </div>


                                </li>

                            </ul>

                        </div>
                    </div>

                </div>
            </div>

            <div className="coming-soon" id='start'>
                <div style={myColumn}>
                    <h1 style={comingSoon}>
                        {i18next.t('coming_soon')}
                    </h1>

                    <p style={comingSoon}>
                        {i18next.t('coming_soon_description')}
                    </p>
                    <img src={phone} alt="" style={{ width: "20%" }} data-aos="zoom-in" data-aos-duration="2000" />
                    <div className="row" style={comingSoon}>
                        <img src={googleStore} style={{ width: "254.26px" }} alt="" ClassName="play-store" />

                        <img src={appleStore} style={{ width: "254.26px" }} alt="" ClassName="play-store" />

                    </div>
                </div>
            </div>

        </>
    );
}

export default Mainbody;