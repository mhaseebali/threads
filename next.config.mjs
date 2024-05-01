/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            // Define serverActions configuration if necessary
        },
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.clerk.com",
            },
            {
                protocol: "https",
                hostname: "images.clerk.dev",
            },
            {
                protocol: "https",
                hostname: "uploadthing.com",
            },
            {
                protocol: "https",
                hostname: "placehold.co",
            },
        ],
        // Remove the 'typescript' key from the images configuration
    },
};

export default nextConfig;
