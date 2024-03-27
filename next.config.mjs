import MillionLint from '@million/lint';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default MillionLint.next({})(nextConfig);
