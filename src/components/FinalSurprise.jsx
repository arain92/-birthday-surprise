import { motion } from "framer-motion";
import { FiRefreshCw } from "react-icons/fi";
import { GIRLFRIEND_NAME } from "../config/surpriseConfig.js";

export default function FinalSurprise({ onReplay }) {
  return (
    <section
      id="final"
      className="journey-section relative isolate flex min-h-screen items-center justify-center overflow-hidden px-5 py-24 text-center sm:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,143,183,0.25),transparent_34%),radial-gradient(circle_at_18%_82%,rgba(158,233,216,0.16),transparent_28%)]" />
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.72, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-xl leading-9 text-cream/80 sm:text-3xl"
        >
          No matter how far we are, you are always close to my heart.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ delay: 0.18, duration: 0.86, ease: "easeOut" }}
          className="mt-8 font-display text-5xl font-bold leading-tight text-cream sm:text-7xl lg:text-8xl"
        >
          Happy Birthday, {GIRLFRIEND_NAME} ❤️
        </motion.h2>

        <motion.button
          type="button"
          onClick={onReplay}
          whileHover={{ scale: 1.035, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="romantic-button mx-auto mt-10 min-h-14 px-8"
        >
          <FiRefreshCw />
          Replay Surprise
        </motion.button>
      </div>
    </section>
  );
}
