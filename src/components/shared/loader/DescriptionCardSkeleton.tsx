// components/shared/loaders/DescriptionCardSkeleton.tsx

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function DescriptionCardSkeleton({ className }: { className?: string }) {
  return (
    <motion.div
      className={clsx(
        "w-full flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm",
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
      <div className="flex gap-4 w-full">
        {/* Avatar Placeholder */}
        <div className="w-14 h-14 rounded-full bg-gray-200" />

        {/* Main Content */}
        <div className="flex-1 space-y-3">
          {/* Title & Description */}
          <div className="h-4 w-3/4 bg-gray-200 rounded" />
          <div className="h-3 w-5/6 bg-gray-100 rounded" />

          {/* Address */}
          <div className="flex items-center gap-2 mt-2">
            <div className="h-3 w-1/2 bg-gray-100 rounded" />
          </div>

          {/* Price & Reviews */}
          <div className="flex items-center gap-4 mt-2">
            <div className="h-3 w-1/5 bg-gray-100 rounded" />
            <div className="h-3 w-1/4 bg-gray-100 rounded" />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-6 w-16 bg-gray-100 rounded-full"
              />
            ))}
          </div>

          {/* View button */}
          <div className="h-8 w-40 bg-gray-100 rounded-full mt-4" />
        </div>

        {/* Chevron Icon */}
        <div className="h-6 w-6 bg-gray-100 rounded-full self-start" />
      </div>
    </motion.div>
  );
}
