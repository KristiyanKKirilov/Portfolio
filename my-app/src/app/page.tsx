import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Image from 'next/image';
import profilePhoto from '../../public/profile_photo.jpg';
import web1 from '../../public/web1.png';
import web2 from '../../public/web2.png';
import web3 from '../../public/web3.png';
import web4 from '../../public/web4.png';
import { useState } from 'react';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    
  return (
    <div>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-6 flex justify-between">
            <h1 className="text-xl font-burtons">Kristiyan's Portfolio</h1>
            <ul className="flex items-center">
                <li>
                    <BsFillMoonStarsFill className="cursor-pointer text-2xl"/> 
                </li>
                <li>
                    <a href="" className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">Resume</a>
                </li>
            </ul>
          </nav>
          <div className="text-center p-10">
                <h2 className="text-5xl py-2 text-teal-600 font-medium  md:text-6xl">Kristiyan Kirilov</h2>
                <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 my-10 mx-auto overflow-hidden"> 
                     <Image src={profilePhoto} alt="Myself" layout="fill" objectFit="cover" />
                </div>
                <h3 className="text-2xl py-2 md:text-3xl">Junior Full Stack Developer</h3>
                <p className="text-md py-5 leading-8 text-gray-800 max-w-96 mx-auto md:text-xl">
                    Currently graduated SoftUni student, who is looking forward to improve the learned knowledge in web development. 
                    On the other excellent student at TU-Varna in second course and member of the university programming team.  
                </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://github.com/KristiyanKKirilov"><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/kristiyan-kirilov-797931302/"><AiFillLinkedin/></a>
          </div>
         
        </section>
        <section>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover w-full h-full" src={web1} alt="FirtProject"/></div>
                <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover w-full h-full" src={web2} alt="SecondProject"/></div>
                <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover w-full h-full" src={web3} alt="ThirdProject"/></div>
                <div className="basis-1/3 flex-1"><Image className="rounded-lg object-cover w-full h-full" src={web4} alt="FourthProject"/></div>
            </div>
        </section>
      </main>
    </div>
  );
}
