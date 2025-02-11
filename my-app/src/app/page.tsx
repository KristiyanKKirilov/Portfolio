"use client";

import { useState } from "react";
import Navigation from "./components/navigation/Navigation";
import Info from "./components/info/Info";
import Projects from "./components/projects/Projects";
import Certificates from "./components/certificates/Certificates";

export default function Home() {
    const [darkMode, setDarkMode] = useState(true);

    const changeModeHandler = () => {
        setDarkMode(oldMode => !oldMode);
    }

    return (
        <div className={darkMode ? "dark" : ""}>
            <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
            <section className="min-h-screen">
               <Navigation onSubmit={changeModeHandler}/>
                <Info/>
                <Projects/>
                <Certificates/>
            </section>
            </main>
        </div>
    );
}
