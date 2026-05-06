import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ExternalLink, X, Code } from "lucide-react";
import { projects } from "../../lib/project";


export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Selected Work" />

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layoutId={`project-card-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject({ ...project, index })}
              className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8 cursor-pointer 
                hover:border-${project.color}-400 dark:hover:border-${project.color}-600 hover:shadow-md transition-all group flex flex-col
                 md:flex-row gap-6 md:items-start relative overflow-hidden`}
            >
              {/* Subtle accent line on the left */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-${project.color}-500/0 group-hover:bg-${project.color}-500 transition-colors`}
              />

              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-baseline gap-2 mb-3">
                  <h3
                    className={`text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-${project.color}-600 
                    dark:group-hover:text-${project.color}-400 transition-colors`}
                  >
                    {project.title}
                  </h3>
                  <span className="text-sm font-mono text-slate-500">
                    {project.date}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            <motion.div
              layoutId={`project-card-${selectedProject.index}`}
              className={`bg-white dark:bg-slate-900 w-full max-w-2xl max-h-[90vh] relative z-10 overflow-y-auto flex flex-col border
                 border-slate-200 dark:border-slate-800 shadow-2xl rounded-lg border-t-4 border-t-${selectedProject.color}-500`}
            >
              <div
                className="sticky top-0 right-0 p-4 flex justify-end bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm z-20 border-b
               border-slate-100 dark:border-slate-800"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors rounded-full"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8 pt-4">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="font-mono text-slate-500 text-sm mb-6">
                    {selectedProject.date}
                  </p>

                  <div className="flex gap-4">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm font-medium flex items-center gap-2 hover:text-${selectedProject.color}-600 
                        dark:hover:text-${selectedProject.color}-400 transition-colors underline underline-offset-4`}
                      >
                        <Code size={16} /> Repository
                      </a>
                    )}
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm font-medium flex items-center gap-2 hover:text-${selectedProject.color}-600 
                        dark:hover:text-${selectedProject.color}-400 transition-colors underline underline-offset-4`}
                      >
                        <ExternalLink size={16} /> Live App
                      </a>
                    )}

                    {selectedProject.presentation && (
                      <a
                        href={selectedProject.presentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm font-medium flex items-center gap-2 hover:text-${selectedProject.color}-600 
                        dark:hover:text-${selectedProject.color}-400 transition-colors underline underline-offset-4`}
                      >
                        <ExternalLink size={16} /> Presentation
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="prose prose-slate dark:prose-invert">
                    <ul className="list-none space-y-3">
                      {selectedProject.details.map((detail, i) => (
                        <li
                          key={i}
                          className="text-slate-600 dark:text-slate-400 leading-relaxed border-l-2 border-slate-200
                           dark:border-slate-800 pl-4 py-1"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3 uppercase tracking-wider">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
