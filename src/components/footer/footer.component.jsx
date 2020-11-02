import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/visa.svg";
import "./footer.styles.scss";

const Footer = () => (
    <div className="footer">
        <Link className="logo-container" to="/visa">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/aboutus"><h3>ABOUT US</h3></Link>
            <Link className="option" to="/foq"><h3>FOQ</h3></Link>
        </div>


    </div>

)

export default Footer;