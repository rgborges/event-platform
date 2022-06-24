import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rkdgfb15pg01yx72le9wn4/master',
    cache: new InMemoryCache()
})