import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { Header } from '../components/Header';
import { Options } from '../components/Options';
import { Hamburguesas } from '../components/Hamburguesas';
import { Pedido } from '../components/Pedido';
import { Nosotros } from '../components/Nosotros';

export const MainRouter = () => {
  return (
    <BrowserRouter>
        <div className="App-header">
            <Header/>
            <Options/>
            <Routes>
                <Route path='/' element={<Hamburguesas/>} />
                <Route path='/hamburguesas' element={<Hamburguesas/>} />
                <Route path='/Pedido' element={<Pedido/>} />
                <Route path='/Nosotros' element={<Nosotros/>} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
