import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import axios from "axios";


export function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await axios.post("https://formspree.io/f/mqenyozl", data, {
        headers: {
          Accept: "application/json",
        },
      });

      if (response.status === 200) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setTimeout(() => {
      if (status !== "idle") setStatus("idle");
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden"
        >
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-colors"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-colors resize-none"
                  placeholder="Your Message"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl font-medium hover:bg-slate-800 dark:hover:bg-white focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <span className="inline-flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 dark:border-slate-900/30 border-t-white dark:border-t-slate-900 rounded-full"
                    />
                    Sending...
                  </span>
                ) : status === "success" ? (
                  <span className="inline-flex items-center gap-2 text-emerald-400 dark:text-emerald-600">
                    <CheckCircle className="w-5 h-5" />
                    Sent Successfully
                  </span>
                ) : status === "error" ? (
                  <span className="inline-flex items-center gap-2 text-red-400 dark:text-red-600">
                    <AlertCircle className="w-5 h-5" />
                    Error Sending
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
