import React from "react";
import {
    FaGithub,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { AiTwotoneHeart } from "react-icons/ai";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="infoText">
                  Made With <AiTwotoneHeart/> By Siddharth Singh
                </div>
                <div className="socialIcons">
                    <span className="icon">
                      <a href="https://www.linkedin.com/in/siddharth-singh-1a2094194/" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
                        <FaLinkedin />
                      </a>
                    </span>

                    <span className="icon">
                      <a href="https://github.com/officiallysidsingh" target="_blank" rel="noopener noreferrer" style={{color: "white"}} >
                        <FaGithub />
                      </a>
                    </span>

                    <span className="icon">
                      <a href="https://hashnode.com/@officiallysidsingh" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
                        <SiHashnode />
                      </a>
                    </span>

                    <span className="icon">
                      <a href="https://twitter.com/sid_singh0125" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
                        <FaTwitter />
                      </a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;