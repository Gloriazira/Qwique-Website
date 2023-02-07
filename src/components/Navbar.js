import React, { Component } from 'react';
import logo from '../assets/Logo.png';
import { IoIosGlobe } from "react-icons/io";
import i18next from 'i18next';
import AnchorLink from "react-anchor-link-smooth-scroll";

// import {IoIosMenu } from "react-icons/io";
// import {IoIosClose } from "react-icons/io";
// const Navbar = () => {

class Navbar extends Component {
    change(option) {
        localStorage.setItem('lang', option.target.value);
        window.location.reload();
    }
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
        console.log();
    }

    render() {
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

                <div >
                    <ul className={this.state.clicked ? "#navlinks active" : "#navlinks"} id="navlinks" style={myStyle}>
                        <li style={myStyle}>
                            <IoIosGlobe size={25} />
                            <form>
                                <select value={lang} onChange={this.change}>
                                    <option value="en">English</option>
                                    <option value="fr">Français</option>


                                </select>
                            </form>
                        </li>

                        <li>
                            <AnchorLink href='#start'><button className="btn">{i18next.t('get_started')}</button></AnchorLink>
                        </li>
                    </ul>
                </div>
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav>
        );
    }
}

export default Navbar;