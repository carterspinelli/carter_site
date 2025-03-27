import { motion } from "framer-motion";
import { TiltSpotlight } from "@/components/ui/tilt-spotlight";
import { Tilt } from "@/components/ui/tilt";
import { Spotlight } from "@/components/ui/spotlight";

export default function Miscellaneous() {
  const titles = [
    {
      title: "Steve Jobs",
      year: 1997,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Steve_Jobs_Headshot_2003.jpg/800px-Steve_Jobs_Headshot_2003.jpg",
      quote: "Here’s to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes… the ones who see things differently — they’re not fond of rules… You can quote them, disagree with them, glorify or vilify them, but the only thing you can’t do is ignore them because they change things… they push the human race forward, and while some may see them as the crazy ones, we see genius, because the ones who are crazy enough to think that they can change the world, are the ones who do."
    },
    {
      title: "Albert Einstein",
      year: 1950,
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Einstein_1947.jpg",
      quote: "A human being is a part of the whole called by us universe, a part limited in time and space. He experiences himself, his thoughts and feeling as something separated from the rest, a kind of optical delusion of his consciousness. This delusion is a kind of prison for us, restricting us to our personal desires and to affection for a few persons nearest to us. Our task must be to free ourselves from this prison by widening our circle of compassion to embrace all living creatures and the whole of nature in its beauty."
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

      <div className="grid grid-cols-1 gap-8">
        {titles.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative group">
              <div className='bg-black'>
                <Tilt
                  rotationFactor={6}
                  isRevese
                >
                  <div className='aspect-video'>
                    <Spotlight
                      className="-top-20 left-0 md:left-10 md:-top-20"
                      fill="white"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover object-center transition-all group-hover:opacity-80"
                      />
                    </Spotlight>
                  </div>
                </Tilt>
              </div>
              <div className="p-4 lowercase bg-zinc-100 dark:bg-zinc-800">
                <h3 className="text-xl font-bold mb-1 text-black dark:text-white">
                {item.title}
                </h3>
                <p className='text-sm text-black dark:text-white mb-3 lowercase'>
                  {item.year}
                </p>
                <p className='text-sm text-black dark:text-white lowercase line-clamp-6 hover:line-clamp-none transition-all'>
                  {item.quote}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}