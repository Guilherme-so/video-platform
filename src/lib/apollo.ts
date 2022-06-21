import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4od21lx1xeg01xx5ej22q11/master',
  cache: new InMemoryCache(),
})
