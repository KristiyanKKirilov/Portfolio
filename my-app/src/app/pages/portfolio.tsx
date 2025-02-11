"use client";

import { useState } from "react";
import Navigation from "../components/navigation/Navigation";
import Info from "../components/info/Info";

export default function Portfolio() {
    const [darkMode, setDarkMode] = useState(true);

    const changeModeHandler = () => {
        setDarkMode((oldMode) => !oldMode);
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
                <section className="min-h-screen">
                    <Navigation onSubmit={changeModeHandler} />
                    <Info />
                </section>
            </main>
        </div>
    );
}
