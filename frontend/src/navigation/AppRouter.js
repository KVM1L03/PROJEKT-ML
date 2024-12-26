import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomeScreen from "../screens/HomeScreen";
import TrainingScreen from "../screens/TrainingScreen";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/training" element={<TrainingScreen />} />
            </Routes>
        </BrowserRouter>
    );
};

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<AppRouter />);

export default AppRouter;