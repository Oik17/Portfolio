import { Kanit } from "next/font/google";
import { PiCertificateDuotone  } from "react-icons/pi";

const league1 = Kanit({ subsets: ["latin"], weight: "400" });

export default function Certifications() {
  return (
    <section id="certifications" className={`${league1.className} p-2 md:p-6 mt-4`}>
      <div className="text-slate-400 text-justify">
        <p className="text-slate-100 text-2xl font-semibold">Certifications</p>
      </div>

      <div className="mt-6">
        {certifications.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:px-5 py-4 gap-4 border-t border-slate-700 pb-4 mb-4 hover:md:scale-105 transition-transform duration-300 ease-in-out hover:md:border-teal-500/40 bg-transparent hover:md:bg-slate-600/20 hover:md:rounded-lg"
          >
            <div className="">
              <div className="flex items-center gap-2">
                <p className="text-slate-100 font-semibold text-lg">{item.title}</p>
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-100"
                  >
                    <PiCertificateDuotone  size={20} />
                  </a>
                )}
              </div>
              <p className="text-slate-400 text-sm mb-2">{item.issuer}</p>
              <p className="text-slate-500 text-xs">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "May 2024",
    link: "https://www.credly.com/your-certification-link"
  },
  {
    title: "Golang Developer Certification",
    issuer: "Go Foundation",
    date: "January 2024",
    link: "https://your-certification-link.com"
  },
  {
    title: "MongoDB Database Administrator",
    issuer: "MongoDB University",
    date: "November 2023",
    link: "https://university.mongodb.com/your-certification"
  }
];
