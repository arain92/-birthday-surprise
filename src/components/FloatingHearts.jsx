import { motion } from "framer-motion";
import { FiHeart, FiStar } from "react-icons/fi";

const floaters = [
  { left: "6%", delay: 0, duration: 13, size: 18, icon: "heart" },
  { left: "17%", delay: 2.2, duration: 16, size: 12, icon: "star" },
  { left: "31%", delay: 1.4, duration: 12, size: 16, icon: "heart" },
  { left: "44%", delay: 3.1, duration: 15, size: 14, icon: "star" },
  { left: "58%", delay: 0.6, duration: 14, size: 20, icon: "heart" },
  { left: "71%", delay: 2.7, duration: 17, size: 13, icon: "star" },
  { left: "83%", delay: 1.1, duration: 12, size: 17, icon: "heart" },
  { left: "94%", delay: 3.8, duration: 15, size: 11, icon: "star" },
];

export default function FloatingHearts({ soft = false }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.11),transparent_34%)]" />
      {floaters.map((item, index) => {
        const Icon = item.icon === "heart" ? FiHeart : FiStar;
        return (
          <motion.span
            key={`${item.left}-${index}`}
            initial={{ y: "110vh", opacity: 0, rotate: -10 }}
            animate={{
              y: "-12vh",
              opacity: [0, soft ? 0.24 : 0.52, 0],
              x: [0, index % 2 === 0 ? 24 : -24, 0],
              rotate: [0, index % 2 === 0 ? 16 : -16, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ left: item.left, fontSize: item.size }}
            className="absolute bottom-0 text-petal drop-shadow-[0_0_16px_rgba(255,211,226,0.8)]"
          >
            <Icon />
          </motion.span>
        );
      })}
    </div>
  );
}
