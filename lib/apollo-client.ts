import { ApolloClient, InMemoryCache } from '@apollo/client'

// http://localhost:3000/api/graphql
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://tecito-ts.vercel.app/api/graphql',
})

export {client}