import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../../public/dev-ed-wave.png';

export default function Home() {
  return (
    <div>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
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
                <h2 className="text-5xl py-2 text-teal-600 font-medium">Kristiyan Kirilov</h2>
                <h3 className="text-2xl py-2">Junior Full Stack Developer</h3>
                <p className="text-md py-5 leading-8 text-gray-800 max-w-96 mx-auto">
                    Currently graduated SoftUni student, who is looking forward to improve the learned knowledge in web development. 
                    On the other excellent student at TU-Varna in second course and member of the university programming team.  
                </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://github.com/KristiyanKKirilov"><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/kristiyan-kirilov-797931302/"><AiFillLinkedin/></a>
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden"> 
            <Image src={deved} alt="Myself" layout="fill" objectFit="cover" />
          </div>
        </section>
      </main>
    </div>
  );
}
