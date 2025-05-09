// components/shared/loaders/CardSkeleton.tsx

import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface CardSkeletonProps {
  className?: string;
}

export default function CardSkeleton({ className }: CardSkeletonProps) {
  return (
    <motion.div
      className={clsx(
        "relative w-full h-[200px] rounded-xl overflow-hidden bg-gray-200",
        className
      )}
      initial={{ opacity: 0.3, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {/* Simulated dark overlay over image */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Simulated text and icon */}
      <div className="relative z-10 h-full w-full flex flex-col justify-between p-4">
        <div className="flex justify-between items-start">
          <div className="h-4 w-1/2 bg-white/30 rounded" />
          <div className="h-4 w-4 bg-white/20 rounded-full" />
        </div>
        <div className="h-3 w-2/3 bg-white/20 rounded" />
      </div>
    </motion.div>
  );
}
