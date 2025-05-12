import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: '/clinic/:name',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },
    ];
  },
  images: {
    domains: [
      'lh4.googleusercontent.com',
      'lh3.googleusercontent.com',
      'lh5.googleusercontent.com',
      'lh6.googleusercontent.com',
      'lh7.googleusercontent.com',
      'lh8.googleusercontent.com',
      'www.google.com',
      'www.gstatic.com',
      'www.tattooremoval.com',
      'streetviewpixels-pa.googleapis.com',
      'source.unsplash.com',
      'images.unsplash.com',
    ],
  },
};

export default nextConfig;
