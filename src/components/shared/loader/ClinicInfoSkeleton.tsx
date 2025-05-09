// components/shared/loaders/ClinicInfoSkeleton.tsx
import { motion } from "framer-motion";

export default function ClinicInfoSkeleton() {
  return (
    <motion.div
      className="w-full h-40 bg-gray-100 rounded-lg p-4 animate-pulse"
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
    >
      <div className="h-5 w-1/3 bg-gray-300 rounded mb-2" />
      <div className="h-3 w-2/3 bg-gray-200 rounded mb-2" />
      <div className="h-3 w-1/2 bg-gray-200 rounded" />
    </motion.div>
  );
}