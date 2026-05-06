import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function SectionHeading({ title, subtitle, className }) {
  return (
    <div className={cn("mb-12", className)}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-neutral-900 dark:text-neutral-100"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl text-balance"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
