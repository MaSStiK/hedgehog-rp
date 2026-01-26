/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "tv.hedgehog-rp.ru",
                pathname: "/thumbnails/**",
            }
        ]
    }
};

export default nextConfig;
