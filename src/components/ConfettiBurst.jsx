import { motion } from "framer-motion";

const colors = ["#ffd3e2", "#ff8fb7", "#f6b37f", "#c9b7ff", "#9ee9d8", "#fff6ea"];

const pieces = Array.from({ length: 86 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  delay: (index % 12) * 0.025,
  rotate: ((index * 53) % 180) - 90,
  color: colors[index % colors.length],
  width: 6 + (index % 4) * 3,
  height: 9 + (index % 5) * 3,
}));

export default function ConfettiBurst() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((piece) => (
        <motion.span
          key={piece.id}
          initial={{ y: -30, x: 0, opacity: 1, rotate: 0 }}
          animate={{
            y: "112vh",
            x: piece.id % 2 === 0 ? 90 : -90,
            opacity: [1, 1, 0],
            rotate: piece.rotate + 360,
          }}
          transition={{ duration: 2.8, delay: piece.delay, ease: "easeOut" }}
          style={{
            left: piece.left,
            background: piece.color,
            width: piece.width,
            height: piece.height,
          }}
          className="absolute top-0 rounded-full shadow-[0_0_18px_rgba(255,255,255,0.28)]"
        />
      ))}
    </div>
  );
}
