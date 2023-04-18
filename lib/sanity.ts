const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: 'nahru1dy',
  dataset: 'production',
  apiVersion: '2023-04-18', // use current UTC date - see "specifying API version"!
  token: '', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client