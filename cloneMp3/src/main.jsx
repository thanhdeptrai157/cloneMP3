import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import reduxConfig from './redux.js'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'


const {store, persistor} = reduxConfig();


createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <PersistGate loading= {null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>

)
