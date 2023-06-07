import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { NavBar } from './components/NavBar'
import './App.css'

const App = () =>{
  return(
    <BrowserRouter>
      <NavBar/>
      <section className={'page'}>
        <AppRouter />
      </section>
    </BrowserRouter>
  );
}
export default App;
