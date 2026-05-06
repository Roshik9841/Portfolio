import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

export function Experience() {
  const experiences = [
    {
      role: "Full Stack Intern",
      company: "Fusemachines",
      date: "Dec 2025 – Mar 2026",
      points: [
        "Architected and implemented a responsive Learning Management System (LMS) using React, TypeScript, and Tailwind CSS. Established a consistent design system using CSS tokens for improved maintainability.",
        "Integrated REST APIs using TanStack Query and implemented secure login/registration with session management.",
        "Improved performance using lazy loading, fixed UI issues, and contributed to backend authentication.",
        "Developed robust data entry systems using React Hook Form and Zod, streamlining complex user onboarding flows.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100
     dark:border-slate-800 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience" />

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <div
                className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 border-b
               border-slate-200 dark:border-slate-800 pb-2"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <a
                      href="/Internship_Certificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
                    >
                      {exp.role}
                    </a>
                  </h3>
                  <h4 className="text-slate-600 dark:text-slate-400 font-medium ml-4 mt-1">
                    {exp.company}
                  </h4>
                </div>
                <div
                  className="mt-1 md:mt-0 ml-4 text-sm text-slate-500 dark:text-slate-500 font-mono bg-slate-100
                 dark:bg-slate-800 px-2 py-1 rounded-lg w-fit"
                >
                  {exp.date}
                </div>
              </div>
              <ul className="space-y-3 mt-4 list-none ml-4">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-slate-600 dark:text-slate-400 leading-relaxed pl-2 border-l-2
                   border-slate-200 dark:border-slate-800 dark:hover:border-amber-200 hover:border-blue-400 transition-colors"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
