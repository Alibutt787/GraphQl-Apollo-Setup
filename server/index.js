const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`

  type Book {
    title: String
    author: String
    age :  String
  }
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'Ali',
    author: 'Butt',
    age: '20'
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
    age: '35'
  },
];


const resolvers = {
  Query: {
    books: () => books,
  },
};


const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
