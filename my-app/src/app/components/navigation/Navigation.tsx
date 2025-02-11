
import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";

interface Submit{
    onSubmit: () => void;
}
export default function Navigation({onSubmit}: Submit) {
    return (
        <>
            <nav className="py-10 mb-6 flex justify-between">
                        <p className="flex gap-5">
                            <Link
                                href="/"
                                className="text-xl font-burtons dark:text-white"
                            >
                                Kristiyan's Portfolio
                            </Link>
                            <Link
                                href="/"
                                className="text-xl font-burtons dark:text-white"
                            >
                                Projects
                            </Link>
                            <Link
                                href="/"
                                className="text-xl font-burtons dark:text-white"
                            >
                                Certificates
                            </Link>
                        </p>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={onSubmit}
                                    className="cursor-pointer text-2xl dark:text-white"
                                />
                            </li>
                            <li>
                                <a
                                    href=""
                                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
            </nav>
         
        </>
    );
}
