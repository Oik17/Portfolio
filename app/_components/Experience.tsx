import { Kanit } from "next/font/google";

const league1 = Kanit({ subsets: ["latin"], weight: "400" });


export default function Experience() {
  return (
    <section id="experience" className={`${league1.className} p-2 md:p-6 mt-16 lg:mt-0`}>
      <div className="text-slate-400 text-justify">
        <p className="text-slate-100 text-2xl font-semibold">Experience</p>
      </div>

      <div className="mt-6">
        {work.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:px-5 py-4 md:grid md:grid-cols-4 gap-4 border-t border-slate-700 pb-4 mb-4 hover:md:scale-105 transition-transform duration-300 ease-in-out hover:md:border-teal-500/40 bg-transparent hover:md:bg-slate-600/20 hover:md:rounded-lg"
          >
            <div className="text-slate-400 md:col-span-1 md:text-left md:pr-6">
              {item.date}
            </div>

            <div className="md:col-span-3">
              <p className="text-slate-100 font-semibold text-lg">{item.title}</p>
              <p className="text-teal-300 text-sm mb-2">{item.company}</p>
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
    </section>
  );
}


const work = [

  {
    title: "Data Analyst Intern",
    company: "Revvity",
    date: "MAY 2025 - PRESENT",
    description:
      "Utilize Python and Power BI to analyze and visualize large datasets. Independently developed a comprehensive audit logging report. Collaborated on testing user-defined functions (UDFs) for data pipelines and contributed to the design and logic of a recommendation engine.",
    skills: ["Python", "Power BI", "SQL", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    title: "Backend Developer",
    company: "VoxVertex",
    date: "JUN - AUG 2024",
    description:
      "Developed the backend of a mobile application using GoLang (Gin framework), PostgreSQL and Docker, Implemented functionalities such as Payments, Google Calendar integration, OAuth2.0 and instant messaging.",
    skills: ["Go", "PostgreSQL", "Docker"],
  },  
  {
      title: "Backend Developer Intern",
      company: "GovGPT",
      date: "JAN - MAY 2024",
      description:
        "Developed the backend of an a law enforcement application with Flask and GoLang, using Timescale DB as the database and OAuth2.0 for user authentication. Converted GraphQL database logic from NodeJS to GoLang for improved performance. Developed a program which filters PDFs containing multiple emails along with hyperlinks into separate entities. Maintained and upgraded the legacy codebase written in NodeJS, implementing better spam and profanity filters",
      skills: ["Go", "NodeJS", "Python", "TimescaleDB", "GraphQL"],
    },
];