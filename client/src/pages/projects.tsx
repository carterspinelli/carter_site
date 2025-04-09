import { motion } from "framer-motion";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "wouter";
import { TiltSpotlight } from "@/components/ui/tilt-spotlight";
import { Tilt } from "@/components/ui/tilt";
import { Spotlight } from "@/components/ui/spotlight";
import { useRef } from "react";

// Import assets
import radioheadAlbumArt from "../images/radiohead_kid_a.png";
import radioheadAudio from "../images/Radiohead - Everything In Its Right Place.mp3";

export default function Projects() {
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };
  return (
    <div className="min-h-screen p-8">
      <Link to="/" className="inline-block mb-6">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-1 text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 stroke-[1.5px]" />
          <span className="text-xs lowercase">back</span>
        </motion.div>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-2xl font-light mb-4 lowercase">projects</h1>
        <p className="text-sm text-zinc-500 max-w-2xl lowercase">
          a collection of my work and experiments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="aspect-video">
            {/* Radiohead card */}
            <Tilt
              rotationFactor={6}
              isRevese
              style={{
                transformOrigin: "center center",
              }}
              springOptions={{
                stiffness: 26.7,
                damping: 4.1,
                mass: 0.2,
              }}
              className="group relative rounded-lg"
            >
              <Spotlight
                className="z-10 from-white/50 via-white/20 to-white/10 blur-2xl"
                size={248}
                springOptions={{
                  stiffness: 26.7,
                  damping: 4.1,
                  mass: 0.2,
                }}
              />
              <div className="relative">
                <img
                  src={radioheadAlbumArt}
                  alt="Radiohead Kid A album cover"
                  className="h-32 w-full rounded-lg object-cover grayscale duration-700 group-hover:grayscale-0"
                />
              </div>
            </Tilt>
            <div className="flex flex-col space-y-0.5 pb-0 pt-3">
              <h3 className="font-mono text-sm font-medium text-zinc-500 dark:text-zinc-400 lowercase">
                radiohead, 2000
              </h3>
              <p className="text-sm text-black dark:text-white lowercase">
                "Everything in Its Right Place." Kid A. Capitol Records, 2000.
              </p>
              <div className="mt-2">
                <audio
                  src={radioheadAudio}
                  controls
                  controlsList="nodownload"
                  className="w-full h-8 opacity-70 hover:opacity-100 transition-opacity"
                  ref={audioRef}
                  onPlay={() => console.log("Audio playing")}
                  onError={(e) => console.error("Audio error:", e)}
                />
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center justify-center"
        >
          <p className="text-zinc-500">more projects coming soon...</p>
        </motion.div>
      </div>
    </div>
  );
}
