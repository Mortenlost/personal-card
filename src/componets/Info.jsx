import React from "react";
import ian from "/src/assets/ian.png";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Info() {
    return(
        <header>
            <img className="info-img" src={ian} alt="Ian with glasses looking smiling to the camera with flowers at his side" />
            <h1 className="name">Ian Aucoin</h1>
            <h3 className="role">Frontend Developer</h3>
            <h4 className="info-website">Ianaucoin.website</h4>
            <div className="info-bnt-container">
                
                <a className="info-email bnt" target="_blank" href="#">
                    <MdEmail className="info-icon" />
                    Email
                </a>
                
                
                <a className="info-linkedin bnt" target="_blank" href="https://www.linkedin.com/in/ian-aucoin-69515a251/" >
                    <FaLinkedin className="info-icon" />
                    LinkedIn
                </a>
            </div>
        </header>
    )
}