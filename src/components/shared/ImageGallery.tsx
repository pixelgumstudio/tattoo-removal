// components/ImageGallery.tsx
import Image from 'next/image';

export const ImageGallery = () => (
  <div className="grid grid-cols-2 gap-4">
    <Image src="/before.jpg" alt="Before Tattoo" width={300} height={200} className="rounded-lg" />
    <Image src="/after.jpg" alt="After Tattoo" width={300} height={200} className="rounded-lg" />
  </div>
);
