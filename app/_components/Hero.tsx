import {Kanit} from "next/font/google"
import { GitHub, LinkedIn, Article} from "@mui/icons-material";
import GitHubCalendar from "react-github-calendar";

const league = Kanit({ subsets: ["latin"], weight: "500" });
const league1 = Kanit({ subsets: ["latin"], weight: "400" });

export default function Hero()
{
    const year = new Date().getFullYear();

    return (
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-col lg:justify-between lg:py-4">
            <p className={`${league.className} font-extrabold text-slate-200  text-[48px] md:text-[54px]`}>Akshat Gupta</p>
            <p className={`${league1.className}  text-xl text-slate-300 mt-[-10px]`}>Backend Developer</p>      
            <p className={`${league1.className} text-slate-400 mt-8 md:mt-6 lg:hidden block`}> &quot;The best backend is the one you never</p> 
            <p className={`${league1.className} text-slate-400 lg:hidden block`}>notice, silently powering everything. &quot;</p> 
            
            <div className="lg:flex-col gap-2 lg:flex md:hidden hidden mt-10 text-slate-400 w-fit text-sm">
                <a href="#main"><p className={`${league.className} hover:text-slate-100 hover:duration-500`}>{"------  "} &nbsp; ABOUT</p></a>
                <a href="#experience"><p className={`${league1.className} hover:text-slate-100 hover:duration-500  `}>{"------"} &nbsp; EXPERIENCE</p></a>
                <a href="#projects"><p className={`${league1.className}  hover:text-slate-100 hover:duration-500 `}> {"------   "} &nbsp; PROJECTS</p></a>
                <a href="#organizations"><p className={`${league1.className}  hover:text-slate-100 hover:duration-500 `}> {"------   "} &nbsp; ORGANISATIONS</p></a> 
            </div>

            <div className="calendar mt-12 w-3/5 lg:block hidden">
                <GitHubCalendar username="Oik17" colorScheme="dark"/>
            </div>

            <div className="flex gap-4 lg:mt-8 mt-10">
                <a href="https://github.com/Oik17" className={`text-slate-400 hover:text-slate-100 hover:duration-500`} target="_blank" rel="noopener noreferrer" ><GitHub className="md:h-7 md:w-7"/></a>
                <a href="https://www.linkedin.com/in/akshat-gupta-864b39235/" className={`text-slate-400 hover:text-slate-100 hover:duration-500`} target="_blank" rel="noopener noreferrer" ><LinkedIn className="md:h-7 md:w-7"/></a>
                <a href="https://resume.akshat-gupta.com/" className={`text-slate-400 hover:text-slate-100 hover:duration-500`} target="_blank" rel="noopener noreferrer" ><Article className="md:h-7 md:w-7"/></a>
            </div>
          
          
        </div>
    )
}   