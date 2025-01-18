export default {
    // Your Next.js configuration
    redirects: async () => {
      return [
        {
          source: '/bruh',
          destination: 'https://signup.nitinseelan.com',
          permanent: true,
        },
      ];
    }, 
  };
  