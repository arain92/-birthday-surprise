import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import BirthdayWish from "./components/BirthdayWish.jsx";
import ConfettiBurst from "./components/ConfettiBurst.jsx";
import FinalSurprise from "./components/FinalSurprise.jsx";
import FloatingHearts from "./components/FloatingHearts.jsx";
import GiftBox from "./components/GiftBox.jsx";
import Landing from "./components/Landing.jsx";
import LoveLetter from "./components/LoveLetter.jsx";
import Memories from "./components/Memories.jsx";
import MusicButton from "./components/MusicButton.jsx";
import ProgressIndicator from "./components/ProgressIndicator.jsx";
import Reasons from "./components/Reasons.jsx";
import SecretCode from "./components/SecretCode.jsx";
import { SECRET_CODE } from "./config/surpriseConfig.js";

const pageVariants = {
  initial: { opacity: 0, y: 18, filter: "blur(10px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -18, filter: "blur(10px)" },
};

function LoadingScreen() {
  return (
    <div className="min-h-screen overflow-hidden bg-romantic-depth text-cream">
      <FloatingHearts soft />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-card max-w-sm px-8 py-10"
        >
          <motion.div
            animate={{ scale: [1, 1.12, 1], rotate: [0, -4, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-petal/20 text-3xl"
          >
            ❤️
          </motion.div>
          <p className="font-script text-4xl text-petal">Preparing your surprise...</p>
          <div className="mx-auto mt-6 h-1.5 w-48 overflow-hidden rounded-full bg-white/15">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-24 rounded-full bg-gradient-to-r from-blush via-roseGold to-mintGlow"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [stage, setStage] = useState("landing");
  const [confettiKey, setConfettiKey] = useState(0);
  const [activeSection, setActiveSection] = useState("wish");

  const sections = useMemo(
    () => [
      { id: "wish", label: "Wish" },
      { id: "letter", label: "Letter" },
      { id: "memories", label: "Memories" },
      { id: "reasons", label: "Reasons" },
      { id: "gift", label: "Gift" },
      { id: "final", label: "Final" },
    ],
    []
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 2000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (stage !== "surprise") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: [0.28, 0.45, 0.62] }
    );

    sections.forEach(({ id }) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [sections, stage]);

  const celebrate = () => setConfettiKey((key) => key + 1);

  const handleOpenSurprise = () => {
    setStage("code");
  };

  const handleUnlock = () => {
    window.localStorage.setItem("birthday-surprise-unlocked", "true");
    celebrate();
    window.setTimeout(() => {
      setStage("surprise");
      window.setTimeout(() => {
        document.getElementById("wish")?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    }, 900);
  };

  const handleReplay = () => {
    celebrate();
    setStage("landing");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-romantic-depth text-cream">
      <FloatingHearts />
      <MusicButton />
      {confettiKey > 0 && <ConfettiBurst key={confettiKey} />}
      {stage === "surprise" && (
        <ProgressIndicator sections={sections} activeSection={activeSection} />
      )}

      <AnimatePresence mode="wait">
        {stage === "landing" && (
          <motion.div
            key="landing"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <Landing onOpen={handleOpenSurprise} />
          </motion.div>
        )}

        {stage === "code" && (
          <motion.div
            key="code"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SecretCode secretCode={SECRET_CODE} onUnlock={handleUnlock} />
          </motion.div>
        )}

        {stage === "surprise" && (
          <motion.main
            key="surprise"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            <BirthdayWish />
            <LoveLetter />
            <Memories />
            <Reasons />
            <GiftBox onOpenGift={celebrate} />
            <FinalSurprise onReplay={handleReplay} />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
