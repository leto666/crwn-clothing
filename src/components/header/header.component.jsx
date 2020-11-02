import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import "./header.styles.scss";
import {auth} from "../../firebase/firebase.utils";

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
            <div className="name_ata">Diamond </div>
            <div className="name_ata">Boutique</div>
        </Link>
        <div className="options">
            <Link className="option" to="/shop"><h1>SHOP</h1></Link>
            <Link className="option" to="/contact"><h3>CONTACT</h3></Link>
            {
                currentUser ? (<div className="option" onClick={()=> auth.signOut()}>SIGN OUT</div>)
                
                :
                (<Link className="option" to="/signin"><h3>SIGN IN</h3></Link>)
            }       

        </div>
    </div>

)

export default Header;