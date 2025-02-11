"use client";

import { useState } from "react";
import Navigation from "../components/navigation/Navigation";
import Certificates from "../components/certificates/Certificates";

export default function CertificatesPage() {
    const [darkMode, setDarkMode] = useState(true);

    const changeModeHandler = () => {
        setDarkMode((oldMode) => !oldMode);
    };

    return (
        <>
            <div className={darkMode ? "dark" : ""}>
                <Navigation onSubmit={changeModeHandler} />
                <Certificates />
            </div>
        </>
    );
}
