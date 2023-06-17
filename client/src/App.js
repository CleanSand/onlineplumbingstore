import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { NavBar } from './components/NavBar'
import './App.css'
import axios from 'axios'
import { observer } from 'mobx-react-lite'
import { Context } from './index'
import { check } from './http/userApi'
import { Spinner } from 'react-bootstrap'

const App = observer(() =>{
  const {user} = useContext(Context)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    setTimeout(() =>{
      check().then(data =>{
      }).finally(() => setloading(false))
    }, 1000)
    })

  if(loading){
    return <Spinner animation={"grow"}/>
  }
  return(
    <BrowserRouter>
      <NavBar/>
      <section className={'page'}>
        <AppRouter />
      </section>
    </BrowserRouter>
  );
});

export default App;
