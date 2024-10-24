import {Kanit} from "next/font/google"
import Skills from "./Skills";

const league1 = Kanit({ subsets: ["latin"], weight: "400" });

export default function About() {
    return (
        <section id="about" className=" lg:scroll-mt-24 md:mb-24 lg:mb-20 lg:mt-10">
            <div className={`${league1.className} text-slate-400 text-justify`}>
                <span className="text-slate-100 block lg:hidden mb-5 text-2xl">About</span>
                I am a backend developer with a strong passion for creating efficient, scalable solutions. Proficient in languages like Go, NodeJS, and Python, I have gained valuable experience working with a variety of technologies.
                <br></br><br></br>
                As a quick learner and team player, I thrive in collaborative environments and am always eager to tackle new challenges. I am now seeking opportunities to broaden my expertise, enhance my skill set, and contribute to impactful projects that push my boundaries.
                <br></br><br></br>
                <Skills/>
            </div>
        </section>
    )
}