"use client";

import { useState } from "react";
import Navigation from "../components/navigation/Navigation";
import Projects from "../components/projects/Projects";

export default function ProjectsPage() {
    const [darkMode, setDarkMode] = useState(true);

    const changeModeHandler = () => {
        setDarkMode((oldMode) => !oldMode);
    };

    return (
        <>
            <div className={darkMode ? "dark" : ""}>
                <Navigation onSubmit={changeModeHandler} />
                <Projects />
            </div>
        </>
    );
}
