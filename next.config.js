/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bing.com',
            },
        ],
    },
}

module.exports = nextConfig
