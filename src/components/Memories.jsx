import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiImage } from "react-icons/fi";
import { memories } from "../config/surpriseConfig.js";

export default function Memories() {
  const [active, setActive] = useState(0);
  const memory = memories[active];

  const goTo = (direction) => {
    setActive((current) => {
      const next = current + direction;
      if (next < 0) return memories.length - 1;
      if (next >= memories.length) return 0;
      return next;
    });
  };

  return (
    <section
      id="memories"
      className="journey-section relative flex min-h-screen items-center px-5 py-24 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.72, ease: "easeOut" }}
        >
          <p className="section-kicker">Memories</p>
          <h2 className="section-title">Little moments, big feelings</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-cream/75">
            I added sweet ice-cream cone memories here, like tiny pictures of
            happiness you can keep sliding through.
          </p>
        </motion.div>

        <div className="glass-card overflow-hidden p-4 sm:p-5">
          <motion.div
            key={memory.title}
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-white/15"
          >
            {memory.image ? (
              <img
                src={memory.image}
                alt={memory.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div
                className={`absolute inset-0 bg-gradient-to-br ${memory.accent}`}
              />
            )}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,9,26,0.08)_0%,rgba(20,9,26,0.76)_100%)]" />
            <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-2xl text-cream backdrop-blur-xl">
              <FiImage />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="font-script text-4xl text-cream sm:text-5xl">
                {memory.title}
              </p>
              <p className="mt-3 max-w-lg text-base leading-7 text-cream/80">
                {memory.caption}
              </p>
            </div>
          </motion.div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => goTo(-1)}
              className="icon-button"
              aria-label="Previous memory"
            >
              <FiChevronLeft />
            </button>
            <div className="flex items-center gap-2">
              {memories.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    active === index ? "w-8 bg-roseGold" : "w-2.5 bg-white/30"
                  }`}
                  aria-label={`Show ${item.title}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(1)}
              className="icon-button"
              aria-label="Next memory"
            >
              <FiChevronRight />
            </button>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {memories.map((item, index) => (
              <button
                key={`${item.title}-thumb`}
                type="button"
                onClick={() => setActive(index)}
                className={`group relative aspect-square overflow-hidden rounded-2xl border transition ${
                  active === index
                    ? "border-roseGold shadow-glow"
                    : "border-white/15 opacity-70 hover:opacity-100"
                }`}
                aria-label={`Preview ${item.title}`}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className={`h-full w-full bg-gradient-to-br ${item.accent}`} />
                )}
                <span className="absolute inset-0 bg-plum/10" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
