import { motion } from "framer-motion";
import { FaBirthdayCake } from "react-icons/fa";
import { birthdayMessage, birthdayWish } from "../config/surpriseConfig.js";

export default function BirthdayWish() {
  return (
    <section
      id="wish"
      className="journey-section relative flex min-h-screen items-center px-5 py-24 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <p className="section-kicker">Birthday wish</p>
          <h2 className="section-title">A soft little card for today</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-cream/80">
            I wanted the first surprise after the secret door to feel calm,
            warm, and held close to the heart.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, rotateY: -16, y: 24 }}
          whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          whileHover={{ rotateY: 4, y: -4 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="glass-card relative overflow-hidden px-6 py-9 sm:px-10 sm:py-12"
        >
          <div className="absolute -right-14 -top-16 h-40 w-40 rounded-full bg-roseGold/25 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-mintGlow/10 blur-3xl" />
          <div className="relative">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-petal/20 text-3xl text-roseGold shadow-glow">
              <FaBirthdayCake />
            </div>
            <h3 className="font-display text-3xl font-bold leading-tight text-cream sm:text-5xl">
              {birthdayWish}
            </h3>
            <p className="mt-6 text-base leading-8 text-cream/80 sm:text-lg">
              {birthdayMessage}
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
