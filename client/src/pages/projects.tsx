
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="min-h-screen p-8">
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl lowercase"
      >
        <p className="text-zinc-500">coming soon...</p>
      </motion.div>
    </div>
  );
}
