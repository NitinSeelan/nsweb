export default {
    // Your Next.js configuration
    redirects: async () => {
      return [
        {
          source: '/signup',
          destination: 'https://signup.nitinseelan.com',
          permanent: true,
        },
      ];
    },
  };
  