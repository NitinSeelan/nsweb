/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/signup', // The path you want to redirect
          destination: 'https://signup.nitinseelan.com', // The target URL
          permanent: true, // Set to true if this is a permanent redirect (301)
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  