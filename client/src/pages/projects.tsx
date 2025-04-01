
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Projects() {
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
