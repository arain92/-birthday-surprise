import { motion } from "framer-motion";
import { useState } from "react";
import { FiLock, FiUnlock } from "react-icons/fi";

export default function SecretCode({ secretCode, onUnlock }) {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const submitCode = (event) => {
    event.preventDefault();
    const correct = code.trim().toLowerCase() === secretCode.toLowerCase();

    if (!correct) {
      setMessage("Oops, try the nickname I call you with love ❤️");
      return;
    }

    setSuccess(true);
    setMessage("You found the key to my heart.");
    window.setTimeout(onUnlock, 450);
  };

  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-5 py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="glass-card w-full max-w-lg px-6 py-8 text-center sm:px-10 sm:py-12"
      >
        <motion.div
          animate={success ? { rotate: [0, -12, 12, 0], scale: [1, 1.12, 1] } : {}}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-petal/25 to-roseGold/20 text-3xl text-petal shadow-glow"
        >
          {success ? <FiUnlock /> : <FiLock />}
        </motion.div>
        <p className="font-script text-4xl text-petal sm:text-5xl">Only the most special person can open this</p>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-cream/75 sm:text-base">
          A tiny secret door, a soft little code, and a whole world waiting behind it.
        </p>

        <form onSubmit={submitCode} className="mt-8 space-y-4">
          <input
            value={code}
            onChange={(event) => {
              setCode(event.target.value);
              setMessage("");
            }}
            type="password"
            autoFocus
            placeholder="Enter the secret code"
            className="w-full rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-center text-lg font-semibold text-cream outline-none ring-petal/50 transition placeholder:text-cream/40 focus:border-petal/50 focus:ring-4"
          />
          <motion.button
            whileHover={{ scale: 1.025, y: -1 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="romantic-button min-h-14 w-full justify-center"
          >
            Unlock My Surprise
          </motion.button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-5 text-sm font-semibold ${
              success ? "text-mintGlow" : "text-petal"
            }`}
          >
            {message}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
