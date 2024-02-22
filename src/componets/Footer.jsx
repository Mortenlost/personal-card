import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <FaTwitter className="twt-icon icon" />
            <FaInstagram className="icon" />
            <FaGithub className="icon"/>
        </footer>
    )
}