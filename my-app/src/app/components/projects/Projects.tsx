import Image from "next/image";
import events from "../../../../public/events.png";
import cars from "../../../../public/cars.png";
import games from "../../../../public/games.png";

export default function Projects() {
    return (
        <section id="projects">
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
                    </div>
        </section>
    );
}
