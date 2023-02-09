// import limage from '../assets/limage.png';

import CustomerIcon from '../assets/customer-icons.svg';
import customer from '../assets/customer.png';
// import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import i18next from '../i18n';




const Restaurant = () => {
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




    return (
        <div>
            <div className="customer-restaurants">
                <h2>{i18next.t('how_we_work')}</h2>

                <div className="cust-rest" style={myRow}>

                    <div>
                        <h3>{i18next.t('for_customers')}</h3>{<br />}

                        <div className="chef-image-one customer" data-aos="zoom-in" data-aos-duration="3000">
                            <img src={customer} alt="" />
                        </div>

                        <p className='cust-desc'>{i18next.t('for_customers_description')}</p>
                        <div style={myRow} className="customer-icon">
                            <img src={CustomerIcon} alt="" className='icons' style={{ margin: "0 50px 0 0" }} />
                            <ul className='rest-icon'>
                                <li data-aos="fade-right"
                                    data-aos-easing="linear"
                                    data-aos-duration="1000" style={myList}>
                                    <h5>{i18next.t('place_order')}</h5> {<br />}
                                    <p>{i18next.t('place_order_description')}</p>

                                </li>
                                <li data-aos="fade-right"
                                    data-aos-easing="linear"
                                    data-aos-duration="1100" style={myList}>

                                    <h5> {i18next.t('drop_location')}</h5> {<br />}

                                    <p >{i18next.t('drop_location_description')}</p>


                                </li>
                                <li data-aos="fade-right"
                                    data-aos-easing="linear"
                                    data-aos-duration="1200" style={myList}>

                                    <h5> {i18next.t('flexible_payment')}
                                    </h5> {<br />}
                                    <p >{i18next.t('flexible_payment_description')}</p>



                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="chef-image customer" data-aos="zoom-in" data-aos-duration="3000">
                        <img src={customer} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Restaurant;