const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: '5pg5pxzc',
  dataset: 'production',
  apiVersion: '2023-04-18', // use current UTC date - see "specifying API version"!
  token: 'skdIGSPxOWzknj23mUVycmd5bG2JkXzUrcagwyB2ZfRwWpeXDIysfzo0A24ZiQeZunXYxpmB4TfexRLdwBnNt6Vdpu691LtTHW1WsSArJbsWo735SvNe1L2CnLDr3hyM8eDkkHHkHh9LBSVR5A0L84S5S666OcI7RhaCcDrd4hsGZybgo9Tp', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client