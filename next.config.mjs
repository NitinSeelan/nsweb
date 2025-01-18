export default {
    // Your Next.js configuration
    redirects: async () => {
      return [
        {
          source: '/signup',
          destination: 'https://signup.nitinseelan.com',
          permanent: true,
        },
        {
          source: '/login',
          destination: 'https://login.nitinseelan.com',
          permanent: true,
        },
      ];
    }, 
  };
  