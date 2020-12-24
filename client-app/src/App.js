import './App.css';
import { client } from './config/gql_config'
import { ApolloProvider } from '@apollo/client';
import { Books } from './Books'
function App() {
  return (

    <ApolloProvider client={client}>
      <Books />
    </ApolloProvider>

  );
}

export default App;
