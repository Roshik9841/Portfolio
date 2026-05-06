import { motion } from "framer-motion";
import { Code, User, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <a
            href="#home"
            className="text-xl font-bold tracking-tight text-slate-900 dark:text-white 
          flex items-center justify-center md:justify-start gap-1 group mb-2"
          >
            <span className="text-amber-500 font-extrabold">R</span>M
            <span className="text-slate-400">.</span>
          </a>
          <span className="text-slate-900 dark:text-slate-400">
            +977 9843225292
          </span>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
            © {new Date().getFullYear()} Roshik Maharjan. All rights reserved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex space-x-6 items-center"
        >
          <a
            href="https://github.com/Roshik9841"
            className="text-slate-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
          >
        
            <Code size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/roshik9841/"
            className="text-slate-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
          >
           
            <User size={20} />
          </a>
          <a
            href="mailto:Roshik9841@gmail.com"
            className="text-slate-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
          >
          
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
