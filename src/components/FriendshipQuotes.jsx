import { motion } from "framer-motion";
import { FiHeart, FiMessageCircle, FiShield, FiUsers } from "react-icons/fi";
import { friendshipQuotes } from "../config/surpriseConfig.js";

const icons = [FiUsers, FiMessageCircle, FiHeart, FiShield];

export default function FriendshipQuotes() {
  return (
    <section
      id="friendship"
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
          <p className="section-kicker justify-center">Friendship</p>
          <h2 className="section-title">My Favorite Friendship Quotes</h2>
          <p className="mt-5 text-lg leading-8 text-cream/75">
            Because the sweetest kind of love is the one where your heart also
            finds its best friend.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {friendshipQuotes.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article
                key={item.quote}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.62, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="glass-card relative min-h-64 overflow-hidden px-6 py-7 sm:px-8 sm:py-9"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-mintGlow/10 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-blush/20 blur-3xl" />
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-petal/20 text-2xl text-roseGold shadow-glow">
                    <Icon />
                  </div>
                  <p className="font-display text-2xl font-bold leading-snug text-cream sm:text-3xl">
                    "{item.quote}"
                  </p>
                  <p className="mt-5 text-base leading-8 text-cream/78">
                    {item.note}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
