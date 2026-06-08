import { motion } from "framer-motion";
import { FiChevronDown, FiHeart } from "react-icons/fi";
import heroImage from "../assets/romantic-hero.png";

export default function Landing({ onOpen, unlocked }) {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <img
        src={heroImage}
        alt="Romantic birthday scene with candles, soft lights, and a gift"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,10,28,0.88)_0%,rgba(42,16,45,0.62)_42%,rgba(20,10,28,0.34)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(255,143,183,0.26),transparent_32%),radial-gradient(circle_at_84%_12%,rgba(246,179,127,0.18),transparent_28%)]" />

      <div className="relative z-10 flex min-h-screen max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-14">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-petal/25 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-petal backdrop-blur-xl"
          >
            <FiHeart /> made only for you
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.75 }}
            className="font-display text-5xl font-bold leading-tight text-cream drop-shadow-2xl sm:text-7xl lg:text-8xl"
          >
            Happy Birthday, My Love ❤️
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.75 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-cream/85 sm:text-2xl"
          >
            A little surprise made only for you
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.72, duration: 0.7 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <motion.button
              type="button"
              onClick={onOpen}
              whileHover={{ scale: 1.035, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="romantic-button min-h-14 px-7 text-base sm:text-lg"
            >
              {unlocked ? "Open Again, My Love" : "Open Your Surprise"}
            </motion.button>
            <p className="max-w-sm text-sm leading-6 text-cream/70">
              Every little detail was chosen to make this moment feel close,
              warm, and full of love.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 9, 0], opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-petal backdrop-blur-xl sm:block"
      >
        <FiChevronDown />
      </motion.div>
    </section>
  );
}
