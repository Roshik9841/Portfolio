import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Accent background */}
          <div className="absolute -left-4 top-4 w-full h-full bg-amber-50 dark:bg-slate-800/50 rounded-2xl -z-10" />

          <div
            className="
              bg-white dark:bg-slate-900
              border border-slate-200 dark:border-slate-700
              p-8 md:p-12
              rounded-2xl
              shadow-sm
              text-slate-600 dark:text-slate-300
              text-lg leading-relaxed
            "
          >
            <p className="mb-6">
              I'm a passionate BCA student at Prime College (Tribhuvan University)
              with a strong interest in both Frontend Development and QA
              Automation. I enjoy building modern, responsive, and user-focused
              web applications while also ensuring software quality through
              testing and automation.
            </p>

          

            <p className="mb-6">
              Alongside development, I am actively learning QA Automation using
              Playwright, API Testing, and modern testing practices. I enjoy
              writing automated test cases, identifying bugs, and improving user
              experience by ensuring applications are reliable and performant.
            </p>

            <p className="mb-10">
              Whether it’s crafting clean and interactive interfaces or testing
              workflows to maintain software quality, I love solving real-world
              problems through technology and continuously improving my skills as
              both a developer and QA enthusiast.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div>
                <span className="block text-base font-semibold text-slate-900 dark:text-white mb-1">
                  Location
                </span>
                <span className="text-base">Kathmandu, Nepal</span>
              </div>

              <div>
                <span className="block text-base font-semibold text-slate-900 dark:text-white mb-1">
                  Education
                </span>
                <span className="text-base">BCA, Prime College</span>
              </div>

              <div>
                <span className="block text-base font-semibold text-slate-900 dark:text-white mb-1">
                  Email
                </span>
                <span className="text-base text-amber-600 dark:text-amber-400">
                  Roshik9841@gmail.com
                </span>
              </div>

              <div>
                <span className="block text-base font-semibold text-slate-900 dark:text-white mb-1">
                  Availability
                </span>
                <span className="text-base text-emerald-600 dark:text-emerald-400 font-medium">
                  Open to Frontend & QA Roles
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}