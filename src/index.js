import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from "react-apollo";
import { client } from './api/config'

const ClientProvidedApp = () => {
  return(
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  )
}



ReactDOM.render(<ClientProvidedApp />, document.getElementById('root'));
registerServiceWorker();
