import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop"><h1>SHOP</h1></Link>
            <Link className="option" to="/contact"><h3>CONTACT</h3></Link>
        </div>


    </div>

)

export default Header;