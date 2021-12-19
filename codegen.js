module.exports = {
  schema: [
      {
          'https://shibhope.hasura.app/v1/graphql': {
              headers: {
                  'x-hasura-admin-secret': process.env.AUTH_TOKEN,
              },
          },
      },
  ],
  overwrite: true,
  generates: {
      './types/models.ts': {
          plugins: [
            'typescript'
          ]
      }
  },
};
