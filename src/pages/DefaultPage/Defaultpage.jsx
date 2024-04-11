import React from "react";
import "./DefaultPage.css"; // Import the CSS file
import { FaArrowRight } from "react-icons/fa";
import Video from "../../assets/backvideo.mp4";
import { Link } from "react-router-dom";

const DefaultPage = () => {
    return (
        <div className="default-page">
            <video autoPlay loop muted className="background">
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <h1>Welcome to Our Study System</h1>
                <p>Unlock the world of knowledge!</p>
                <Link to={"/dashboard"} className="btn-card">
                    <button className="btn-home">
                        <span>go to dashboard</span> <FaArrowRight />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DefaultPage;
