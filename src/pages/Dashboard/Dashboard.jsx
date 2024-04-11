import React, { useState } from "react";
import Seminar from "./Seminar";
import Practice from "./Practice";
import { FaUser } from "react-icons/fa";

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
                <div className="btn-avatar">
                    <FaUser size={30} color="blue" />
                </div>
            </div>
            <div className="dashboard-btns container">
                <button
                    className={isActive ? "" : "active"}
                    onClick={changeStatusToFalse}
                >
                    Practice
                </button>
                <button
                    className={isActive ? "active" : ""}
                    onClick={changeStatusToTrue}
                >
                    Seminar
                </button>
            </div>
            <div className="container">
                {status ? <Seminar /> : <Practice />}
            </div>
        </div>
    );
};

export default Dashboard;
