import React from "react";

import "./styles/main.css"

import { HashRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";
import ScrollToTop from "./utils/scrollToTop";
import Games from "./pages/Games";
import Counter from "./pages/counter/Counter";
import Modal from "./pages/modal/Modal";
import Quiz from "./pages/quiz/Quiz";
import Users from "./pages/User/Users";
import Calculator from "./pages/calculator/Calculator";
import Orcs from "./pages/orcs/Orcs";

function App () {
    return(

        <div className="App">
            <Router>
                <ScrollToTop />
                <Navbar />
                <Routes>
                    <Route path="/my-portfolio" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<Project />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/games" element={<Games />} />
                    <Route path="/games/0" element={<Counter />} />
                    <Route path="/games/1" element={<Modal />} />
                    <Route path="/games/2" element={<Quiz />} />
                    <Route path="/games/3" element={<Users />} />
                    <Route path="/games/4" element={<Calculator />} />
                    <Route path="/games/5" element={<Orcs />} />
                </Routes>
                <Footer />
            </Router>
        </div>

    )
}
export default App