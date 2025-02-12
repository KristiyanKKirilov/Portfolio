import fundamentals from "../../public/fundamentals.jpeg";
import advanced from "../../public/advanced.jpeg";
import sql from "../../public/sql.jpeg";
import ef from "../../public/ef.jpeg";
import aspFund from "../../public/asp-fund.jpeg";
import aspAdv from "../../public/asp-adv.jpeg";
import html from "../../public/html.jpeg";
import js from "../../public/js.jpeg";
import angular from "../../public/angular.jpeg";
import softuni from "../../public/softuni2.png";
import tuvarna from "../../public/tuvarna.jpg";
import supne from "../../public/supne.png";
import rep from "../../public/rep.jpg";
import sp from "../../public/sp.jpg";
import dsd from "../../public/dsd.jpg";
import dsd2 from "../../public/dsd2.jpg";
import cambridge from "../../public/cambridge.jpg";

export default function Certificates() {
    return (
        <section id="certificates">
            <h3 className="text-5xl p-5 mt-10 underline font-burtons dark:text-white text-center">
                Certificates
            </h3>
            <img
                className="w-40 rounded-md mx-auto mt-10"
                src={softuni}
                alt="SoftUni"
            />
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <div className="basis-1/4 flex-1">
                    <img
                        className="rounded-lg object-cover w-full h-full"
                        src={fundamentals}
                        alt="SecondProject"
                    />
                </div>
                <div className="basis-1/4 flex-1">
                    <img
                        className="rounded-lg object-cover w-full h-full"
                        src={advanced}
                        alt="ThirdProject"
                    />
                </div>
                <div className="basis-1/4 flex-1">
                    <img
                        className="rounded-lg object-cover w-full h-full"
                        src={sql}
                        alt="FourthProject"
                    />
                </div>
                <div className="basis-1/4 flex-1">
                    <img
                        className="rounded-lg object-cover w-full h-full"
                        src={ef}
                        alt="FourthProject"
                    />
                </div>
                <div className="basis-1/4 flex-1">
                    <img
                        className="rounded-lg object-cover w-full h-full"
                        src={aspFund}
                        alt="FourthProject"
                    />
                </div>
                <div className="basis-1/4 flex-1">
                    <img
                        className="rounded-lg object-cover w-full h-full"
                        src={aspAdv}
                        alt="FourthProject"
                    />
                </div>
                <div className="basis-1/4 flex-1">
                    <img
                        className="rounded-lg object-cover w-full h-full"
                        src={html}
                        alt="FourthProject"
                    />
                </div>
                <div className="basis-1/4 flex-1">
                    <img
                        className="rounded-lg object-cover w-full h-full"
                        src={js}
                        alt="FourthProject"
                    />
                </div>
                <div className="basis-1/4 flex-1">
                    <img
                        className="rounded-lg object-cover w-full h-full"
                        src={angular}
                        alt="FourthProject"
                    />
                </div>
            </div>
            <img
                className="w-40 rounded-md mx-auto mt-10"
                src={tuvarna}
                alt="SoftUni"
            />
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <div className="basis-1/10 flex-1">
                    <img
                        className="rounded-lg object-cover w-full h-full"
                        src={rep}
                        alt="SecondProject"
                    />
                </div>
                <div className="basis-1/10 flex-1">
                    <img
                        className="rounded-lg object-cover w-full h-full"
                        src={sp}
                        alt="ThirdProject"
                    />
                </div>
            </div>
            <img
                className="w-40 rounded-md mx-auto mt-10"
                src={supne}
                alt="SoftUni"
            />
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <div className="relative basis-1/10 flex-1 group">
                    <img
                        className="rounded-lg object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-0 z-10 pointer-events-none"
                        src={dsd}
                        alt="Front Image"
                    />
                    <img
                        className="absolute top-0 left-0 rounded-lg object-cover w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0 pointer-events-none" 
                        src={dsd2} 
                        alt="Hover Image"
                    />
                </div>
                <div className="basis-1/10 flex-1">
                    <img
                        className="rounded-lg object-cover w-full h-full"
                        src={cambridge}
                        alt="ThirdProject"
                    />
                </div>
            </div>
        </section>
    );
}
