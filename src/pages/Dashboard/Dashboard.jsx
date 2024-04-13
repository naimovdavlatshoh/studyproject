import React, { useState } from "react";
import Seminar from "./Seminar";
import Practice from "./Practice";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [status, setStatus] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const changeStatusToFalse = () => {
        setStatus(false);
        setIsActive(false);
    };
    const changeStatusToTrue = () => {
        setStatus(true);
        setIsActive(true);
    };
    return (
        <div>
            <div className="navbar container">
                <h1>Thomas Shelby</h1>
                <Link to="/profile" className="btn-avatar ">
                    <FaUser size={30} color="steelblue" />
                </Link>
            </div>
            <div className="dashboard-btns container">
                <button
                    className={isActive ? "" : "active"}
                    onClick={changeStatusToFalse}
                >
                    Seminar
                </button>
                <button
                    className={isActive ? "active" : ""}
                    onClick={changeStatusToTrue}
                >
                    Practice
                </button>
            </div>
            <div className="container">
                {status ? <Practice /> : <Seminar />}
            </div>
        </div>
    );
};

export default Dashboard;
