import Main from "./Main/Main.js"
import About from "./About/About.js"

import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";

export default function Components() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/" replace/>} />
            </Routes>
        </Router>
    );
}