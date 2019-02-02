const { ApolloServer } = require('apollo-server');
const { typeDefs, resolvers } = require('./schema');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: {
        origin: '*',
        credentials: true
    }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});