
import { motion } from "framer-motion";
import { TiltSpotlight } from "@/components/ui/tilt-spotlight";
import { Tilt } from "@/components/ui/tilt";
import { Spotlight } from "@/components/ui/spotlight";

export default function Miscellaneous() {
  const titles = [
    {
      title: "Steve Jobs, 1997",
      director: "Here's to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes… the ones who see things differently — they're not fond of rules… You can quote them, disagree with them, glorify or vilify them, but the only thing you can't do is ignore them because they change things… they push the human race forward, and while some may see them as the crazy ones, we see genius, because the ones who are crazy enough to think that they can change the world, are the ones who do.",
      image: "/The-late-Steve-Jobs-Apple-009.webp"
    },
    {
      title: "Albert Einstein",
      director: "A human being is a part of the whole called by us universe, a part limited in time and space. He experiences himself, his thoughts and feeling as something separated from the rest, a kind of optical delusion of his consciousness. This delusion is a kind of prison for us, restricting us to our personal desires and to affection for a few persons nearest to us. Our task must be to free ourselves from this prison by widening our circle of compassion to embrace all living creatures and the whole of nature in its beauty.",
      image: "/albert_einstein.webp"
    },
    {
      title: "Blade Runner",
      director: "Ridley Scott",
      image: "https://i.imgur.com/JD38uTJ.jpg"
    },
    {
      title: "Akira",
      director: "Katsuhiro Otomo",
      image: "https://i.imgur.com/NZ5J703.jpg"
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
          a collection of items that don't fit elsewhere. interactive cinematic frames, experiments, 
          sketches and other digital artifacts.
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
                <img
                  src={item.image}
                  alt={item.title}
                  className='h-32 w-full rounded-lg object-cover grayscale duration-700 group-hover:grayscale-0'
                />
              </Tilt>
              <div className='flex flex-col space-y-0.5 pb-0 pt-3'>
                <h3 className='font-mono text-sm font-medium text-zinc-500 dark:text-zinc-400 lowercase'>
                  {item.title}
                </h3>
                <p className='text-sm text-black dark:text-white lowercase'>
                  {item.director}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
