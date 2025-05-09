// components/shared/loaders/TextBlockSkeleton.tsx
import { motion } from "framer-motion";

export default function TextBlockSkeleton() {
  return (
    <motion.div
      className="w-full space-y-3"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
    >
      <div className="h-6 w-1/4 bg-gray-300 rounded" />
      <div className="h-4 w-11/12 bg-gray-200 rounded" />
      <div className="h-4 w-10/12 bg-gray-100 rounded" />
      <div className="h-4 w-9/12 bg-gray-100 rounded" />
    </motion.div>
  );
}
