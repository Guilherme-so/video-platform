import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'

import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
      <ToastContainer />
    </div>
  )
}

export default App
