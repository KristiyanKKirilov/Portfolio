"use client";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import profilePhoto from "../../public/profile_photo.jpg";
import events from "../../public/events.png";
import cars from "../../public/cars.png";
import games from "../../public/games.png";
import web4 from "../../public/web4.png";
import { useState } from "react";
import Link from "next/link";
import Navigation from "./components/navigation/Navigation";

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
                    
                    <div className="text-center p-10">
                        <h2 className="text-5xl py-2 text-teal-600 font-medium  md:text-6xl">
                            Kristiyan Kirilov
                        </h2>
                        <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 my-10 mx-auto overflow-hidden">
                            <Image
                                src={profilePhoto}
                                alt="Myself"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                            Junior Full Stack Developer
                        </h3>
                        <p className="text-md py-5 leading-8 text-gray-800 max-w-96 mx-auto md:text-xl dark:text-teal-500">
                            Currently graduated SoftUni student, who is looking
                            forward to improve the learned knowledge in web
                            development. On the other hand excellent student at
                            TU-Varna in second course and member of the
                            university programming team.
                        </p>
                    </div>
                    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
                        <a href="https://github.com/KristiyanKKirilov">
                            <AiFillGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/kristiyan-kirilov-797931302/">
                            <AiFillLinkedin />
                        </a>
                    </div>
                </section>
                <section>
                    <h3 className="text-4xl p-5 mt-10 underline font-burtons dark:text-white text-center">
                        Projects
                    </h3>
                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                src={events}
                                alt="FirtProject"
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                src={cars}
                                alt="SecondProject"
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <Image
                                className="rounded-lg object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                                src={games}
                                alt="ThirdProject"
                            />
                        </div>
                        <div className="basis-1/3 flex-1 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
                            <Image
                                className="rounded-lg object-cover w-full h-full"
                                src={web4}
                                alt="FourthProject"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
