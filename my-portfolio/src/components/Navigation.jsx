import { BsFillMoonStarsFill } from "react-icons/bs";
import {Link} from "react-router-dom";

export default function Navigation({onSubmit}) {
    return (
        <>
            <nav className="py-10 mb-6 flex justify-between">
                        <p className="flex gap-5 flex-wrap">
                            <Link
                                to="/"
                                className="relative text-xl font-burtons dark:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                                >
                                Kristiyan's Portfolio
                            </Link>
                            <Link
                                to="/projects"
                                className="relative text-xl font-burtons dark:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                                >
                                Projects
                            </Link>
                            <Link
                                to="/certificates"
                                className="relative text-xl font-burtons dark:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                                >
                                Certificates
                            </Link>
                        </p>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={onSubmit}
                                    className="cursor-pointer text-4xl dark:text-white rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 p-2"
                                />
                            </li>
                            <li>
                                <a
                                    href="/Kristiyan-Resume.pdf"
                                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:cursor-pointer"
                                    download="Kristiyan-Resume.pdf"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
            </nav>
         
        </>
    );
}
