import React, { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App";
import UserStore from './store/UserStore'
import ProductStore from './store/ProductStore'

export const Context = createContext(null)
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    product: new ProductStore(),
  }}>
    <App />
  </Context.Provider>
);
