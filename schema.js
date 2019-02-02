const { gql } = require('apollo-server');
const { questions } = require('./trivia-questions-data');

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
exports.typeDefs = gql`
  type Question {
    category: String
    question: String
    choices: [String!]
    answer: Int
    answered: Boolean
  }

  type Query {
    questions: [Question]
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
exports.resolvers = {
  Query: {
    questions: () => questions
  },
};