import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import { IoIosGlobe } from "react-icons/io";
import i18next from 'i18next';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const change = (option) => {
        localStorage.setItem('lang', option.target.value);
        window.location.reload();
    };

    const handleClick = () => {
        setClicked(!clicked);
    };

    const closeMobileMenu = () => setClicked(false);

    const myStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    };
    const lang = localStorage.getItem('lang') || 'en';

    return (
        <nav style={myStyle}>
            <div className="logo">
                <img src={logo} alt="logo" />


            </div>

            <div>
                <ul className={clicked ? "#navlinks active" : "#navlinks"} id="navlinks" style={myStyle}>
                    <li style={myStyle}>
                        <IoIosGlobe size={25} />
                        <form>
                            <select value={lang} onChange={change}>
                                <option value="en">English</option>
                                <option value="fr">Français</option>
                            </select>
                        </form>
                    </li>

                    <li>
                        <AnchorLink href='#start'>
                            <button className="btn" onClick={closeMobileMenu}>{i18next.t('get_started')}</button>
                        </AnchorLink>
                    </li>
                </ul>
            </div>
            <div id="mobile" onClick={handleClick}>

                <FontAwesomeIcon icon={clicked ? faTimes : faBars} className='bar' />



            </div>
        </nav>
    );
};

export default Navbar;