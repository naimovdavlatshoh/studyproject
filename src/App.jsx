import { useEffect, useState } from "react";
import { Dashboard, DefaultPage } from "./pages";
import { Route, Routes } from "react-router-dom";
import SeminarDetail from "./pages/Seminar/SeminarDetail";
import "./index.css";
import Profile from "./pages/Profile/Profile";
import PracticeDetail from "./pages/Practise/Practice";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<DefaultPage />} />
                <Route path={"/dashboard"} element={<Dashboard />} />
                <Route
                    path={"dashboard/seminar/:id"}
                    element={<SeminarDetail />}
                />
                <Route
                    path={"dashboard/practice/:id"}
                    element={<PracticeDetail />}
                />
                <Route path={"/profile"} element={<Profile />} />
            </Routes>
        </>
    );
}

export default App;
