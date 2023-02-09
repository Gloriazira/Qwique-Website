// import limage from '../assets/limage.png';
import chef from '../assets/restaurant.png';
import RestaurantIcon from '../assets/restaurants-icon.svg';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import i18next from '../i18n';


const Customer = () => {


    AOS.init();
    AOS.refresh();

    const myRow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    };

    const myList = {
        margin: "20% 0"
    }

    const myBg = {
        background: "#FFF5DD",

    }



    return (
        <div className="customer-restaurants" style={myBg}>


            <div className="cust-rest " style={myRow}>
                <div>
                    <div className="chef-image restaurant">
                    
                        <img src={chef} alt="" data-aos="zoom-in" data-aos-duration="3000" />
                    </div>
                    <p className='contact' data-aos="fade-in" data-aos-duration="1300" style={{
                        fontWeight: "400",
                        fontSize: "20px",
                        lineHeight: "30px",
                        marginTop: "20px",
                        color: "#5D5D5D",}}>
                            {i18next.t('contact_title')} <span>
                            <a href="mailto:info@qwique.com " style={{
                                textDecoration: "none", fontWeight: "700",
                                color: "#FF7011",
                            }}> info@qwique.com </a></span> {i18next.t('contact_info')}
                    </p>
                </div>

                <div>
                    <h3>{i18next.t('for_restaurants')}</h3>{<br />}
                    <div className="chef-image-one restaurant" >
                        <img src={chef} alt="" data-aos="zoom-in" data-aos-duration="3000" />
                    </div>

                    <p className='cust-desc'>{i18next.t('for_restaurants_description')}</p>
                    <div style={myRow} className="restaurant-icon">
                        <img src={RestaurantIcon} alt="" className='icons' style={{ margin: "0 50px 0 0" }} />
                        <ul className='rest-icon'>
                            <li data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1000" style={myList}>
                                <h5> {i18next.t('create_account')}</h5> {<br />}
                                <p>{i18next.t('create_account_description')}</p>
                            </li>

                            <li data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1200" style={myList}>
                                <h5> {i18next.t('upload_menu')}</h5> {<br />}
                                <p>{i18next.t('upload_menu_description')}</p>
                            </li>

                            <li data-aos="fade-right"
                                data-aos-easing="linear"
                                data-aos-duration="1200" style={myList}>
                                <h5>{i18next.t('manage_orders')}</h5> {<br />}
                                <p>{i18next.t('manage_orders_description')}</p>
                            </li>

                        </ul>

                    </div>
                    <p className='contact one' data-aos="fade-in" data-aos-duration="1300" style={{
                        fontWeight: "400",
                        fontSize: "20px",
                        lineHeight: "30px",
                        marginTop: "20px",
                        color: "#5D5D5D",}}>
                            {i18next.t('contact_title')} <span>
                            <a href="mailto:info@qwique.com " style={{
                                textDecoration: "none", fontWeight: "700",
                                color: "#FF7011",
                            }}> info@qwique.com </a></span> {i18next.t('contact_info')}
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Customer;