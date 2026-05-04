import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "NestJS", "SpringBoot", "PostgreSQL", "Express", "typeORM"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "VS Code", "Postman", "Vite", "IntelliJ IDEA", "GitHub Actions"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Technologies" 
        />

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800 pb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md text-slate-700 dark:text-slate-300 text-sm font-medium hover:border-amber-400 dark:hover:border-amber-600 hover:text-amber-600 dark:hover:text-amber-400 hover:shadow-sm transition-all cursor-default"
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
           <ul className="list-none space-y-3 text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg w-full max-w-md">
                <span className="font-medium text-slate-800 dark:text-slate-200 flex-1">Joy of React</span>
                <span className="text-sm text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">June 2025</span>
              </li>
              <li className="flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg w-full max-w-md">
                <span className="font-medium text-slate-800 dark:text-slate-200 flex-1">Hackaverse</span>
                <span className="text-sm text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">June 2025</span>
              </li>
           </ul>
        </motion.div>
      </div>
    </section>
  );
}
