const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation:{
    addBooks: (e, {input})=>{
      console.log(input);
      books.push({title: input.title,
        author: input.author,
        age :  input.age,})

      return{
        title: input.title,
        author: input.author,
        age :  input.age,
      }
    }
  }
};


const typeDefs = gql`

  type Book {
    title: String
    author: String
    age :  String
  }
  
  type Query {
    books: [Book]
  }

  input StdBook{
    title: String
    author: String
    age :  String
  }

  type Mutation{
    addBooks(input:StdBook):Book
  }
  
`;

let books = [
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




const server = new ApolloServer({ typeDefs, resolvers });


// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});


