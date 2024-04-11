import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from 'App'

import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import store from 'app/store'

import 'animate.css'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>
)
