import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Me" 
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Subtle warm accent behind the content */}
          <div className="absolute -left-4 top-4 w-full h-full bg-amber-50 dark:bg-slate-800/50 rounded-2xl -z-10" />
          
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-8 md:p-12 rounded-2xl shadow-sm text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            <p className="mb-6">
              I'm a dedicated BCA student with a strong foundation in modern web development. Currently studying at Prime College (Tribhuvan University), I spend my time bridging the gap between design and robust engineering.
            </p>
            <p className="mb-6">
              My journey began with a curiosity about how things work on the internet, which quickly turned into a passion for building them. I've had the opportunity to intern as a Full Stack Developer at Fusemachines, where I architected responsive Learning Management Systems and improved performance across complex applications.
            </p>
            <p className="mb-10">
              Whether it's designing a seamless user interface with React and Tailwind CSS or building scalable APIs with Node.js and NestJS, I care deeply about creating experiences that are both beautiful and functionally sound.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div>
                <span className="block text-sm font-semibold text-slate-900 dark:text-white mb-1">Location</span>
                <span className="text-sm">Kathmandu, Nepal</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-slate-900 dark:text-white mb-1">Education</span>
                <span className="text-sm">BCA, Prime College</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-slate-900 dark:text-white mb-1">Email</span>
                <span className="text-sm text-amber-600 dark:text-amber-400">Roshik9841@gmail.com</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-slate-900 dark:text-white mb-1">Availability</span>
                <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Open to work</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
