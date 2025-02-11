import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import profilePhoto from "../../../../public/profile_photo.jpg"


export default function Info() {
    return (
        <>
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
                    Currently graduated SoftUni student, who is looking forward
                    to improve the learned knowledge in web development. On the
                    other hand excellent student at TU-Varna in second course
                    and member of the university programming team.
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
        </>
    );
}
