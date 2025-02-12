import events from "../assets/events.png";
import cars from "../assets/cars.png";
import games from "../assets/games.png";

export default function Projects() {
    return (
        <section id="projects">
            <h3 className="text-5xl p-5 mt-10 underline font-burtons dark:text-white text-center">
                Projects
            </h3>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <div className="relative basis-1/3 flex-1 group">
                    {/* Image */}
                    <img
                        className="rounded-lg object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                        src={events}
                        alt="FirstProject"
                    />

                    {/* Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-100 opacity-0 group-hover:opacity-60 flex justify-center items-center transition-opacity duration-300">
                        <p className="text-white text-xl font-bold">
                            ASP.NET Core & MSSQL
                        </p>
                    </div>
                </div>
                <div className="relative basis-1/3 flex-1 group">
                    {/* Image */}
                    <img
                        className="rounded-lg object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                        src={cars}
                        alt="FirstProject"
                    />

                    {/* Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-100 opacity-0 group-hover:opacity-60 flex justify-center items-center transition-opacity duration-300">
                        <p className="text-white text-xl font-bold">
                            Angular & MongoDB
                        </p>
                    </div>
                </div>
                <div className="relative basis-1/3 flex-1 group">
                    {/* Image */}
                    <img
                        className="rounded-lg object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                        src={games}
                        alt="FirstProject"
                    />

                    {/* Overlay */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-100 opacity-0 group-hover:opacity-60 flex justify-center items-center transition-opacity duration-300">
                        <p className="text-white text-xl font-bold">
                            ReactJS
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
