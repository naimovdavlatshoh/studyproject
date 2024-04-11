import { useState } from "react";
import { Dashboard, DefaultPage } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
    const [count, setCount] = useState(0);

    return (
        <Routes>
            <Route path={"/"} element={<DefaultPage />} />
            <Route path={"/dashboard"} element={<Dashboard />} />
        </Routes>
    );
}

export default App;
