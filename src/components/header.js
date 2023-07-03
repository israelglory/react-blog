import PropTypes from 'prop-types';
import React from 'react';
import { FcList } from "react-icons/fc";


function Header({title, onHomeClick, onAboutClick, onContactClick}){
    return (
        <div className="header-div">
            <h1>{title}</h1>
           
            {/* list of buttons */}
            <div className='nav'>
            <ul >
                <li><button className="btn btn-primary" onClick={() => {
                    onHomeClick();
                }}>UI Design</button></li>
                <li><button className="btn btn-primary" onClick={() => {
                    onAboutClick();
                }}>Front-end</button></li>
                <li><button className="btn btn-primary" onClick={() => {
                    onContactClick();
                }}>Back-end</button></li>
                <li><button className="btn btn-primary" onClick={() => {
                    onContactClick();
                }}>Mobile</button></li>
            </ul>
            </div>
            <div className="search-div"> 
            Search
            </div>
            <FcList className="menu" color="white"/>
        </div>
    );

}

Header.defaultProps = {
    title : "Glory",
}
Header.prototype = {
    title : PropTypes.string,
}




export default Header;