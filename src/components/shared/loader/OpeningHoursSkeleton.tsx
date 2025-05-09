// components/shared/loaders/OpeningHoursSkeleton.tsx

import { motion } from "framer-motion";

export default function OpeningHoursSkeleton() {
  return (
    <motion.div
      className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow max-w-sm w-full animate-pulse space-y-3"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
    >
      {/* Title bar */}
      <div className="h-4 w-1/3 bg-gray-300 dark:bg-zinc-700 rounded mb-4" />

      {/* List of 7 rows */}
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} className="flex justify-between items-center">
          <div className="h-3 w-1/4 bg-gray-200 dark:bg-zinc-800 rounded" />
          <div className="h-3 w-1/2 bg-gray-200 dark:bg-zinc-800 rounded" />
        </div>
      ))}
    </motion.div>
  );
}
// This skeleton component simulates a loading state for a list of opening hours. It uses the Framer Motion library to animate the opacity and scale of the component, creating a pulsing effect. The skeleton consists of a title bar and a list of rows, each representing a day of the week with corresponding opening hours. The colors are adjusted for light and dark themes.