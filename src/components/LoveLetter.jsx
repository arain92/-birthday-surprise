import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import { loveLetter } from "../config/surpriseConfig.js";

const paragraphs = loveLetter.split("\n\n");

export default function LoveLetter() {
  return (
    <section
      id="letter"
      className="journey-section relative flex min-h-screen items-center px-5 py-24 sm:px-8"
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 text-center"
        >
          <p className="section-kicker justify-center">Love letter</p>
          <h2 className="section-title">A Letter From My Heart</h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="glass-card relative overflow-hidden px-6 py-8 sm:px-10 sm:py-12"
        >
          <div className="absolute right-8 top-8 text-petal/35">
            <FiHeart size={44} />
          </div>
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-petal/60 to-transparent" />
          <div className="relative space-y-6">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ delay: index * 0.12, duration: 0.62, ease: "easeOut" }}
                className={`leading-8 text-cream/85 ${
                  index === 0 ? "font-script text-4xl text-petal sm:text-5xl" : "text-base sm:text-lg"
                }`}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
