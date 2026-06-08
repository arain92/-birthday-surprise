import { motion } from "framer-motion";
import { useState } from "react";
import { FiGift } from "react-icons/fi";

export default function GiftBox({ onOpenGift }) {
  const [open, setOpen] = useState(false);

  const openGift = () => {
    if (open) return;
    setOpen(true);
    onOpenGift();
  };

  return (
    <section
      id="gift"
      className="journey-section relative flex min-h-screen items-center justify-center px-5 py-24 sm:px-8"
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <p className="section-kicker justify-center">Virtual gift</p>
          <h2 className="section-title">Something small, but from my whole heart</h2>
        </motion.div>

        <div className="mt-10 glass-card px-6 py-10 sm:px-10">
          <button
            type="button"
            onClick={openGift}
            className="mx-auto block focus:outline-none focus:ring-4 focus:ring-petal/45"
            aria-label="Open your gift"
          >
            <div className="relative mx-auto h-48 w-56 sm:h-56 sm:w-64">
              <motion.div
                animate={
                  open
                    ? { y: -76, rotate: -11, x: -18 }
                    : { y: [0, -7, 0], rotate: [0, 1.5, 0] }
                }
                transition={
                  open
                    ? { duration: 0.72, ease: "easeOut" }
                    : { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }
                className="absolute left-1/2 top-8 z-20 h-16 w-56 -translate-x-1/2 rounded-2xl border border-white/20 bg-gradient-to-r from-petal via-blush to-roseGold shadow-glow sm:w-64"
              >
                <div className="absolute left-1/2 top-0 h-full w-9 -translate-x-1/2 bg-cream/70" />
              </motion.div>
              <motion.div
                animate={open ? { scale: [0.9, 1.12, 1], opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.22 }}
                className="absolute left-1/2 top-5 z-10 -translate-x-1/2 text-5xl text-petal"
              >
                ❤️
              </motion.div>
              <div className="absolute bottom-0 left-1/2 h-36 w-48 -translate-x-1/2 rounded-3xl border border-white/20 bg-gradient-to-br from-blush via-wine to-plum shadow-romantic sm:h-44 sm:w-56">
                <div className="absolute left-1/2 top-0 h-full w-10 -translate-x-1/2 bg-cream/70" />
                <div className="absolute left-0 top-1/2 h-9 w-full -translate-y-1/2 bg-cream/70" />
              </div>
            </div>
          </button>

          {!open && (
            <motion.button
              type="button"
              onClick={openGift}
              whileHover={{ scale: 1.025, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="romantic-button mx-auto mt-8 min-h-14 px-8"
            >
              <FiGift />
              Open Your Gift 🎁
            </motion.button>
          )}

          {open && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.75, ease: "easeOut" }}
              className="mx-auto mt-8 max-w-2xl rounded-[1.75rem] border border-petal/25 bg-white/10 px-5 py-6 text-lg leading-8 text-cream/85 backdrop-blur-xl sm:px-8"
            >
              My gift is a promise: I will always try to make you smile, support
              you, respect you, and love you more every day.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
