import { ApolloClient, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
    uri: 'https://tecito-api.vercel.app/',
    cache: new InMemoryCache(),
  });

export default client