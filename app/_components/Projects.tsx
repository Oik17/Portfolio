import { Kanit } from "next/font/google";
import GitHubCalendar from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import { FaLink  } from "react-icons/fa"; 

const league1 = Kanit({ subsets: ["latin"], weight: "400" });

export default function Projects() {
  const year = new Date().getFullYear();

  return (
    <section id="projects" className={`${league1.className} p-2 md:p-6 mt-4 `}>
      <div className="text-slate-400 text-justify">
        <p className="text-slate-100 text-2xl font-semibold">Projects</p>
      </div>

      <div className="mt-6">
        {work.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:px-5 py-4 gap-4 border-t border-slate-700 pb-4 mb-4 hover:md:scale-105 transition-transform duration-300 ease-in-out hover:md:border-teal-500/40 bg-transparent hover:md:bg-slate-600/20 hover:md:rounded-lg"
          >
            <div className="">
              <div className="flex items-center gap-2">
                <p className="text-slate-100 font-semibold text-lg">{item.title}</p>
                
                {item.msstore && (
                  <a 
                    href={item.msstore} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-100"
                  >
                    <FaLink  size={18} />
                  </a>
                )}
                {item.github && (
                  <a 
                    href={item.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-100"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
              </div>
              <p className="text-slate-400 text-sm mb-4 text-justify">{item.description}</p>

              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="calendar lg:hidden block mt-16">
        <GitHubCalendar username="Oik17" colorScheme="dark" year={year}/>
      </div>
    </section>
  );
}

const work = [
  {
    title: "gRPC-game",
    description:
      "Multiplayer quiz game which utilizes gRPC to stream responses from users and updates the leaderboard with their points.",
    skills: ["Go", "gRPC", "sqlc", "PostgreSQL"],
    github: "https://github.com/Oik17/gRPC-game",
  },
  {
    title: "MPL Backend",
    description:
      "Backend for SIAM-VIT's flagship event, Math Premier League, which hosted over 100 concurrent users. Contains functionalities to authenticate users, update team scores, display and verify questions, and monitor the leaderboard in real time.",
    skills: ["Go", "sqlx", "PostgreSQL", "Redis", "NGINX", "Docker", "JWT"],
    github: "https://github.com/SIAM-VIT/MPL-be",
  },
  {
    title: "CookOff Backend",
    description:
      "`Backend for CodeChef-VIT's flagship event, CookOff 7.0. Developed questions handler and real time code evaluation using Judge0 API.`",
    skills: ["ExpressJS", "MongoDB", "Docker", "JWT"],
    github: "https://github.com/CodeChefVIT/cookoff-backend",
  },
  {
    title: "MPL Admin Portal",
    description:
      "Frontend of portal used by the admin to create teams, monitor the leaderboard in real time, update team scores and monitor the progress of the teams for SIAM-VIT's flagship event, MPL, hosting over 100 concurrent users.",
    skills: ["ReactJS", "TailwindCSS"],
    github: "https://github.com/SIAM-VIT/MPL-fe-admin",
  },
  {
    title: "Golang File Setup Extension",
    description:
      "VSCode Extension that initializes basic files and folder structure for Go frameworks (Gin/Echo/Fiber/Chi), including main.go, Docker files, and optional SQLx setup.",
    skills: ["Go", "Javascript"],
    github: "https://github.com/Oik17/golang-file-setup-extension",
    msstore: "https://marketplace.visualstudio.com/items?itemName=AkshatGupta.golang-sqlx-file-setup", 
  },
  {
    title: "VTOP to Google Calendar Extension",
    description:
      "Google Extension which automatically syncs the due dates of all Digital Assignments from VTOP to your Google Calendar.",
    skills: ["Javascript", "HTML", "CSS"],
    github: "https://github.com/Oik17/VTOP-to-Google-Calendar-Sync",
  },  
  {
      title: "Briefly",
      description:
        "Online tool for generating video summaries and transcripts. Backend in Python/Django, with a frontend by a team member. Hosted on Replit.",
      skills: ["Python", "Django", "Replit"],
      github: "https://github.com/Oik17/briefly",
    },
  {
    title: "Word Setup Script",
    description:
      "A powershell script to setup all basic parts of a MS Word file for a digital assignment, including name, headings, subheadings and margins.",
    skills: ["Powershell"],
    github: "https://github.com/Oik17/Word-Setup",
  }
];
