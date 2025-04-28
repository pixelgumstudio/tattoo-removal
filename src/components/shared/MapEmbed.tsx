// components/MapEmbed.tsx

interface MapProps {
  lat: string | number;
  long: string | number;
  label: string; // Optional label to show in pin
}

export const MapEmbed = ({ lat, long, label }: MapProps) => {
  const query = encodeURIComponent(`${lat},${long} (${label})`);
  const src = `https://maps.google.com/maps?q=${query}&z=15&output=embed`;

  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <iframe
        src={src}
        className="w-full h-[300px]"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map of ${label}`}
      />
    </div>
  );
};
