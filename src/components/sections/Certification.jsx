import { useState } from "react";
import hackathon from "../../assets/hackathon.jpg";
import python from "../../assets/python.png";
import ReactImg from "../../assets/React.png";
import Toeffl from "../../assets/Toeffl.jpg";
import GD from "../../assets/GD.jpg";
import gis from "../../assets/gis.jpg";
import ict from "../../assets/ict.jpg";
import { CircleArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Technical",
    content: [
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
    ],
  },
  {
    title: "Leadership",
    content: [
      {
        id: 1,
        src: ict,
        alt: "ICT Certification",
      },
      {
        id: 2,
        src: GD,
        alt: "GD Certification",
      },
      {
        id: 3,
        src: gis,
        alt: "GIS Certification",
      },
    ],
  },
];
export const Certification = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  return (
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

      <div className="hidden lg:flex lg:flex-wrap gap-x-12 gap-y-6 text-xl font-bold pb-4">
        {certifications.map((cert, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`group  transition-transform duration-200 flex gap-3 items-center whitespace-nowrap 
                hover:text-amber-400 ${
                  activeTab === index ? "text-amber-400" : "text-slate-600"
                }`}
          >
            <CircleArrowRight
              size={24}
              className={`transition-transform duration-700 ${
                activeTab === index
                  ? "text-amber-400"
                  : "text-slate-600 -rotate-45 group-hover:rotate-0 group-hover:text-amber-400"
              }`}
            />
            {cert.title}
          </button>
        ))}
      </div>
      <div className="  text-slate-600 dark:text-slate-400 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
        {certifications[activeTab].content.map((cert) => (
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
            className="relative max-w-2xl w-fit"
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
              className="max-h-[90vh] w-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};
