import { useEffect, useRef, useState } from "react";
import { FiMusic, FiPause } from "react-icons/fi";
import birthdayMusic from "../assets/birthday-music.mp3";

export default function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const [musicError, setMusicError] = useState("");
  const audioRef = useRef(null);

  const getAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(birthdayMusic);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.56;
    }

    return audioRef.current;
  };

  const stopMusic = () => {
    const audio = getAudio();
    audio.pause();
    setPlaying(false);
  };

  const startMusic = async () => {
    try {
      const audio = getAudio();
      await audio.play();
      setMusicError("");
      setPlaying(true);
    } catch {
      setMusicError("Tap once more to play the birthday music.");
      setPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return (
    <div className="fixed right-4 top-4 z-40 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-2">
      <button
        type="button"
        onClick={playing ? stopMusic : startMusic}
        className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 bg-plum/55 px-4 py-3 text-sm font-semibold text-cream shadow-glow backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-petal/70"
        aria-label={playing ? "Pause birthday music" : "Play birthday music"}
      >
        {playing ? <FiPause /> : <FiMusic />}
        <span>{playing ? "Pause Music" : "Play Birthday Music 🎵"}</span>
      </button>

      {musicError && (
        <p className="max-w-56 rounded-2xl border border-white/15 bg-plum/65 px-3 py-2 text-right text-xs font-semibold text-petal shadow-glow backdrop-blur-xl">
          {musicError}
        </p>
      )}
    </div>
  );
}
