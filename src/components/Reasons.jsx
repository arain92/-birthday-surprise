import { motion } from "framer-motion";
import { FiHeart, FiMic, FiSmile, FiStar, FiSun } from "react-icons/fi";
import { FaCrown } from "react-icons/fa";
import { loveReasons } from "../config/surpriseConfig.js";

const icons = [FiSmile, FiMic, FiStar, FaCrown, FiHeart, FiSun];

export default function Reasons() {
  return (
    <section
      id="reasons"
      className="journey-section relative flex min-h-screen items-center px-5 py-24 sm:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.72, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-kicker justify-center">Reasons</p>
          <h2 className="section-title">Six tiny truths I carry with me</h2>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {loveReasons.map((reason, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={reason}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.62, delay: index * 0.07, ease: "easeOut" }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="glass-card min-h-48 px-6 py-7"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-petal/20 text-2xl text-roseGold shadow-glow">
                  <Icon />
                </div>
                <p className="text-xl font-semibold leading-8 text-cream">
                  {reason}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
