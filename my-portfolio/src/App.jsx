import { useState } from "react";
import Navigation from "./components/Navigation";
import Info from "./components/Info";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import {Routes, Route} from 'react-router-dom';
import "./styles.css";

export default function App() {
    const [darkMode, setDarkMode] = useState(true);

    const changeModeHandler = () => {
        setDarkMode(oldMode => !oldMode);
    }

    return (
        <div className={darkMode ? "dark" : ""}>
            <main className="bg-white px-10 md:px-20 pb-10 lg:px-40 dark:bg-gray-900">
            <section className="min-h-screen">
               <Navigation onSubmit={changeModeHandler}/>
               <Routes>
                    <Route path="/" element={<Info/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/certificates" element={<Certificates/>}/>
               </Routes>
            </section>
            </main>
        </div>
    );
}
