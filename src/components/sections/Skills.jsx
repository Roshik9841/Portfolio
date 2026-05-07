import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { useState } from "react";
import hackathon from "../../assets/hackathon.jpg";
import python from "../../assets/python.png";
import ReactImg from "../../assets/react.png";
import Toeffl from "../../assets/Toeffl.jpg";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Express",
      "typeORM",
      "SpringBoot",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "VS Code",
      "Postman",
      "Vite",
      "IntelliJ IDEA",
      "GitHub Actions",
    ],
  },
];

const certifications = [
  {
    id: 1,
    src: ReactImg,
    alt: "React Certification",
  },
  {
    id: 2,
    src: hackathon,
    alt: "Hackathon ",
  },
  {
    id: 3,
    src: python,
    alt: "Python Certification",
  },
  {
    id: 4,
    src: Toeffl,
    alt: "Toefl Certification",
  },
];

export function Skills() {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technologies" />

        <div className="space-y-12">
          {skillCategories.map((category, indexed) => (
            <motion.div
              key={indexed}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: indexed * 0.1 }}
            >
              <h3
                className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200 border-b border-slate-200
               dark:border-slate-800 pb-2 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 
                    rounded-md text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-amber-400
                     dark:hover:border-amber-600 hover:text-amber-600 dark:hover:text-amber-400 hover:shadow-sm 
                     transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certification Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800"
        >
          <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Certifications
          </h3>
          <div className="  text-slate-600 dark:text-slate-400 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="w-full">
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group "
                >
                  <div
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800  cursor-pointer
                   shadow-sm transition-all hover:shadow-xl"
                    onClick={() => setSelectedItem(cert)}
                  >
                    <img
                      src={cert.src}
                      alt={cert.alt}
                      className="h-61 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  </div>
                  <p className="mt-3 text-sm font-medium text-slate-600 dark:text-slate-400 text-center">
                    {cert.alt}
                  </p>
                </a>
              </div>
            ))}
          </div>

          {selectedItem && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur cursor-pointer"
              onClick={() => setSelectedItem(null)}
            >
              <div
                className="relative max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
            
                <button
                  className="absolute -top-12 right-0 text-white text-3xl p-2 hover:text-amber-500 transition-colors"
                  onClick={() => setSelectedItem(null)}
                >
                  ✕
                </button>

                <img
                  src={selectedItem.src} // Now this will work because selectedItem is the object
                  alt={selectedItem.alt}
                  className="max-h-[90vh] w-full object-contain rounded-lg shadow-2xl bg-white"
                />
               
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
