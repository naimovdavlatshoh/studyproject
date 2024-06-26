import React from "react";
import "./profile.css";
import Avatarka from "../../assets/avatar.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    return (
        <div>
            <div className="adminBtn">
                <a
                    target="blank"
                    href="https://darspro.pythonanywhere.com/admin/"
                >
                    <button>admin</button>
                </a>
            </div>
            <div className="profile">
                <div className="box-avatar">
                    <img src={Avatarka} alt="" className="avatar" />
                </div>
                <div className="about">
                    <div
                        style={{
                            marginBottom: 30,
                            display: "flex",
                            justifyContent: "start",
                            gap: 30,
                        }}
                    >
                        <p className="name">Firstname: &nbsp;</p>
                        <p className="name">Jasur</p>
                    </div>
                    <div
                        style={{
                            marginBottom: 30,
                            display: "flex",
                            justifyContent: "start",
                            gap: 30,
                        }}
                    >
                        <p className="name">Lastname: &nbsp;</p>
                        <p className="name">Arabov</p>
                    </div>
                    <div
                        style={{
                            marginBottom: 30,
                            display: "flex",
                            justifyContent: "start",
                            gap: 30,
                        }}
                    >
                        <p className="name">Age: &nbsp;</p>
                        <p className="name">30</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
