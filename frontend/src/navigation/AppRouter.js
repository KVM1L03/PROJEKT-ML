import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HeartScreen from "../screens/HeartScreen";
import HomeScreen from "../screens/HomeScreen";
import SleepScreen from "../screens/SleepScreen";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/heart" element={<HeartScreen />} />
                <Route path="/sleep" element={<SleepScreen />} />
            </Routes>
        </BrowserRouter>
    );
};

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<AppRouter />);

export default AppRouter;