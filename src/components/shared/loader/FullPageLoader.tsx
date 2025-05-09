// components/shared/FullPageLoader.tsx
import { Loader2 } from "lucide-react";

export default function FullPageLoader() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center gap-2 text-gray-600">
        <Loader2 className="w-20 h-20 animate-spin" />
        <span className="text-sm font-medium">Loading clinic details...</span>
      </div>
    </div>
  );
}
