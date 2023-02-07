
import logo from '../assets/Logo.png';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import i18next from '../i18n';



const Footer = () => {

    const myRow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    };

    // const myColumn = {
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "space-between",
    //     alignItems: "center",
    //     width: "80%"
    // }

    return (
        <div className="footer">
            <div className="footer-content" >
                <div >
                    <p style={{
                        fontWeight: "400",
                        fontSize: "20px",
                        lineHeight: "30px",
                        margin: "40px 10px 30px 10px",
                        textAlign: "center",
                        color: "#5D5D5D",
                    }}>{i18next.t('contact_title')} <span>
                            <a href="mailto:info@qwique.com " style={{
                                textDecoration: "none", fontWeight: "700",
                                color: "#FF7011",
                            }}> info@qwique.com </a></span> {i18next.t('contact_info')}
                    </p>
                </div>

                <div className='hr' style={{ borderTop: "2px solid #F4F4F4 ", margin: "2% 10%" }}></div>

                {/* <hr style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: .5,
                    borderColor: '#000000'
                }} /> */}


                <div className="base-footer">
                    <img src={logo} alt="" />

                    <p style={{marginLeft: "6%"}}>{i18next.t('copy_right')}</p>

                    <ul style={myRow}>
                        <li><FaFacebookF size={25} /> </li>
                        <li><FaTwitter size={25} /> </li>
                        <li><FaInstagram size={25} /> </li>
                        <li><a href="http://http://linkedin.com/company/qwiquenq" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={25} /></a></li>
                    </ul>

                </div>

            </div>
        </div>
    );
}

export default Footer;


