import {Kanit} from "next/font/google"
import Skills from "./Skills";

const league1 = Kanit({ subsets: ["latin"], weight: "400" });

export default function About() {
    return (
        <section id="about" className=" lg:scroll-mt-24 md:mb-24 lg:mb-20 lg:mt-10">
            <div className={`${league1.className} text-slate-400 text-justify`}>
                <span className="text-slate-100 block lg:hidden mb-5 text-2xl">About</span>
                As a backend developer with a strong focus on building efficient and scalable systems, I've had the opportunity to work on a variety of applications across my internships. These experiences, combined with my work in technologies like Go, Node.js, and Python, have helped me build a solid and adaptable foundation in software development.
                <br></br><br></br>
                I enjoy solving complex problems, learning new tools and frameworks, and collaborating with others to ship meaningful products. I'm always looking for opportunities that challenge me, help me grow my skill set, and allow me to contribute to impactful projects.
                <br></br><br></br>
                <Skills/>
            </div>
        </section>
    )
}