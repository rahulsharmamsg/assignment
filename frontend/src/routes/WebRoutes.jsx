import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Layout } from '../layout/Layout'
import { Home } from '../components/Home'
import { About } from '../components/About'
import { Todo } from '../components/Todo'
export const WebRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
            <Route path='/' element={<Layout />}> 
            <Route path='/' index element={<Home />}/>
            <Route path='/about' index element={<About />}/>
            <Route path='/todo' index element={<Todo />}/>
            </Route>
    </Routes>
    </BrowserRouter>
  )
}
