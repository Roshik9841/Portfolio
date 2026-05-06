import { motion } from "framer-motion";
import { Code, User, Mail, Download, ArrowRight } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-24 pb-12 relative overflow-hidden bg-dot-pattern"
    >
      <div
        className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-amber-400/10
       dark:bg-amber-500/5 blur-3xl "
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className=" py-1 px-3 rounded-md bg-amber-100 dark:bg-amber-900/30
             text-amber-800 dark:text-amber-300 text-sm font-semibold tracking-wide border
              border-amber-200 dark:border-amber-800/50">
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-slate-900 dark:text-slate-50 "
          >
            Hi, I'm{" "}
            <span className="text-amber-600 dark:text-amber-500">
              Roshik Maharjan.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-10 text-balance leading-relaxed"
          >
            I'm a BCA student and full-stack developer from Kathmandu. I love
            building clean interfaces and robust backends using React and
            Node.js.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="#about"
              className="px-6 py-3 rounded-md bg-amber-600 text-white font-medium
               hover:bg-amber-700 transition-all hover:shadow-lg hover:shadow-amber-600/20 flex items-center gap-2 group"
            >
              More about me
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 font-medium flex items-center gap-2 transition-colors text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 shadow-sm"
            >
              <Download size={18} />
              Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 flex gap-6">
            <SocialLink
              href="https://github.com/Roshik9841"
              icon={<Code />}
              
            />
            <SocialLink
              href="https://www.linkedin.com/in/roshik9841/"
              icon={<User />}
      
            />
            <SocialLink
              href="mailto:roshik9841@gmail.com"
              icon={<Mail />}
           
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800
       rounded-md text-slate-500 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-500
        hover:border-amber-200 dark:hover:border-amber-800 transition-all hover:-translate-y-1 hover:shadow-md"
    >
      {icon}
    </a>
  );
}
