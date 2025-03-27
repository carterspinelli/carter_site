
import { motion } from "framer-motion";
import { TiltSpotlight } from "@/components/ui/tilt-spotlight";
import { Tilt } from "@/components/ui/tilt";
import { Spotlight } from "@/components/ui/spotlight";
import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Play, X } from "lucide-react";

// Import assets directly to ensure they are bundled correctly
import radioheadAlbumArt from '../images/radiohead_kid_a.png';
import radioheadAudio from '../images/Radiohead - Everything In Its Right Place.mp3';
import falconHeavyVideo from '../images/falcon_heavy_boosters_20240625.mp4';
import falconHeavyImage from '../images/falcon_heavy_boosters_landing.webp';

export default function Miscellaneous() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [openVideo, setOpenVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  
  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };
  
  const handleOpenVideo = (videoSrc: string) => {
    setCurrentVideo(videoSrc);
    setOpenVideo(true);
  };
  
  const titles = [
    {
      title: "Steve Jobs, 1997",
      director: "Here's to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes… the ones who see things differently — they're not fond of rules… You can quote them, disagree with them, glorify or vilify them, but the only thing you can't do is ignore them because they change things… they push the human race forward, and while some may see them as the crazy ones, we see genius, because the ones who are crazy enough to think that they can change the world, are the ones who do.",
      image: "/The-late-Steve-Jobs-Apple-009.webp"
    },
    {
      title: "Albert Einstein, 1950",
      director: "A human being is a part of the whole called by us universe, a part limited in time and space. He experiences himself, his thoughts and feeling as something separated from the rest, a kind of optical delusion of his consciousness. This delusion is a kind of prison for us, restricting us to our personal desires and to affection for a few persons nearest to us. Our task must be to free ourselves from this prison by widening our circle of compassion to embrace all living creatures and the whole of nature in its beauty.",
      image: "/albert_einstein.webp"
    },
    {
      title: "Everything In Its Right Place",
      director: "Radiohead. \"Everything in Its Right Place.\" Kid A, Capitol Records, 2000.",
      image: radioheadAlbumArt,
      isAudio: true,
      audioSrc: radioheadAudio
    },
    {
      title: "Falcon Heavy Boosters",
      director: "SpaceX, 2025",
      image: falconHeavyImage,
      isVideo: true,
      videoSrc: falconHeavyVideo
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h1 className="text-2xl font-light mb-4 lowercase">miscellaneous</h1>
        <p className="text-sm text-zinc-500 max-w-2xl lowercase">
          a collection of ideas and music that i like.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {titles.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className='aspect-video'>
              {item.isVideo ? (
                <Dialog open={openVideo && currentVideo === item.videoSrc} onOpenChange={(open) => !open && setOpenVideo(false)}>
                  <DialogTrigger asChild>
                    <div onClick={() => handleOpenVideo(item.videoSrc)}>
                      <Tilt
                        rotationFactor={6}
                        isRevese
                        style={{
                          transformOrigin: 'center center',
                        }}
                        springOptions={{
                          stiffness: 26.7,
                          damping: 4.1,
                          mass: 0.2,
                        }}
                        className='group relative rounded-lg cursor-pointer'
                      >
                        <Spotlight
                          className='z-10 from-white/50 via-white/20 to-white/10 blur-2xl'
                          size={248}
                          springOptions={{
                            stiffness: 26.7,
                            damping: 4.1,
                            mass: 0.2,
                          }}
                        />
                        <div className="relative">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-32 w-full rounded-lg object-cover grayscale duration-700 group-hover:grayscale-0"
                          />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Play className="w-12 h-12 text-white drop-shadow-lg" />
                          </div>
                        </div>
                      </Tilt>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-4xl h-auto p-0 overflow-hidden bg-black">
                    <DialogTitle className="sr-only">{item.title} Video</DialogTitle>
                    <DialogDescription className="sr-only">Watch {item.director}</DialogDescription>
                    <div className="relative">
                      <button 
                        className="absolute top-2 right-2 z-10 bg-black/60 rounded-full p-1"
                        onClick={() => setOpenVideo(false)}
                        aria-label="Close video"
                      >
                        <X className="w-5 h-5 text-white" />
                      </button>
                      <video 
                        src={item.videoSrc} 
                        controls
                        autoPlay
                        className="w-full max-h-[80vh]"
                        ref={videoRef}
                        controlsList="nodownload"
                        aria-label={`${item.title} Video`}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <Tilt
                  rotationFactor={6}
                  isRevese
                  style={{
                    transformOrigin: 'center center',
                  }}
                  springOptions={{
                    stiffness: 26.7,
                    damping: 4.1,
                    mass: 0.2,
                  }}
                  className='group relative rounded-lg'
                >
                  <Spotlight
                    className='z-10 from-white/50 via-white/20 to-white/10 blur-2xl'
                    size={248}
                    springOptions={{
                      stiffness: 26.7,
                      damping: 4.1,
                      mass: 0.2,
                    }}
                  />
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      style={item.title === "Everything In Its Right Place" ? { objectPosition: "center center" } : {}}
                      className={`h-32 w-full rounded-lg object-cover grayscale duration-700 group-hover:grayscale-0`}
                    />
                  </div>
                </Tilt>
              )}
              <div className='flex flex-col space-y-0.5 pb-0 pt-3'>
                <h3 className='font-mono text-sm font-medium text-zinc-500 dark:text-zinc-400 lowercase'>
                  {item.title}
                </h3>
                <p className='text-sm text-black dark:text-white lowercase'>
                  {item.director}
                </p>
                {item.isAudio && (
                  <div className="mt-2">
                    <audio 
                      src={item.audioSrc} 
                      controls 
                      controlsList="nodownload" 
                      className="w-full h-8 opacity-70 hover:opacity-100 transition-opacity"
                      ref={item.title === "Everything In Its Right Place" ? audioRef : undefined}
                      onPlay={() => console.log("Audio playing")}
                      onError={(e) => console.error("Audio error:", e)}
                    />
                  </div>
                )}
                {item.isVideo && (
                  <div className="mt-2">
                    <button 
                      onClick={() => handleOpenVideo(item.videoSrc)}
                      className="flex items-center gap-2 text-xs text-black dark:text-white opacity-70 hover:opacity-100 transition-opacity"
                    >
                      <Play className="w-4 h-4" /> <span>play video</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
