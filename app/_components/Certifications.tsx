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
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Aug 2024",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/e95a5c2d48ed4b2eaa9bb97dfde9f97f"
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI and Standford University, Coursera",
    date: "Apr 2025",
    link: "https://www.coursera.org/account/accomplishments/verify/SGVZQB8JCQ97"
  },
  {
    title: "The Complete Full-Stack Web Development BootCamp",
    issuer: "Angela Yu, Udemy",
    date: "March 2024",
    link: "https://www.udemy.com/certificate/UC-9df84cd4-bf14-45b7-8145-67afce01df69/"
  },
  {
    title: "Game Development using PyGame",
    issuer: "GUVI Geek Network, IITM Research Park",
    date: "Sep 2022",
    link: "https://www.guvi.in/verify-certificate?id=jK5m2Y6R32O191XM63"
  },
  {
    title: "Guitar Grade 7",
    issuer: "London College of Music Examinations",
    date: "Apr 2022",
    link: "https://guitar.akshat-gupta.com/"
  },
];
