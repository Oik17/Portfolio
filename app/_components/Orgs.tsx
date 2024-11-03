import { Kanit } from "next/font/google";

const league1 = Kanit({ subsets: ["latin"], weight: "400" });


export default function Organisations() {
  return (
    <div id="organizations" className={`${league1.className} p-2 md:p-6 mt-12 lg:mt-10`}>
      <div className="text-slate-400 text-justify">
        <p className="text-slate-100 text-2xl font-semibold">Organisations</p>
      </div>

      <div className="mt-6">
        {orgs.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:px-5 py-4 md:grid md:grid-cols-4 gap-4 border-t border-slate-700 pb-4 mb-4 hover:md:scale-105 transition-transform duration-300 ease-in-out hover:md:border-teal-500/40 bg-transparent hover:md:bg-slate-600/20 hover:md:rounded-lg"
          >
            <div className="text-slate-400 md:col-span-1 md:text-left md:pr-6">
              {item.date}
            </div>

            <div className="md:col-span-3">
              <p className="text-slate-100 font-semibold text-lg mb-1">{item.position}</p>
              <p className="text-teal-300 text-sm mb-2">{item.name}</p>
              <p className="text-slate-400 text-sm mb-4 text-justify">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


const orgs = [
    {
        "name": "Society for Industrial and Applied Mathematics (SIAM), VIT",
        "position": "Technical Chairperson",
        "date": "SEPT 2023 - PRESENT",
        "description": "Led key technical operations, including code reviews and training sessions on GitHub workflows, web development, and competitive coding. Organized the 'Bug Hunt' event featuring coding challenges in Python, C, and C++ with varied difficulty levels. Coordinated events for over 200 participants during VIT's cultural fest, Riviera."
    },
    {
        "name": "CodeChef-VIT Student Chapter",
        "position": "Senior Core Committee Member",
        "date": "MAR 2023 - SEPT 2024",
        "description": "Developed the backend for India's largest student-run hackathon, DevSoC 24', utilizing GoLang, Redis, and PostgreSQL. Conducted backend development workshops on ExpressJS and MongoDB. Designed the backend for an e-commerce platform with NSFW filtering, using GoLang (Fiber) and OAuth 2.0. Built the backend for 'CookOff 8.0', an online coding competition, using ExpressJS and Judge0 API, engaging over 200 participants. "
    }
]