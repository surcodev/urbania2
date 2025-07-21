import 'dotenv/config';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['firebasestorage.googleapis.com'],
    },
    experimental: {
        allowedDevOrigins: [process.env.URL_NGROK],
    },
};

export default nextConfig;
