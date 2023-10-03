import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.css"
import Header from './componentes/header/Header'
import Portfolio from './componentes/portfolio/Portfolio'
import Contato from './contato/Contato'
import Footer from './componentes/footer/Footer'
import Main from './componentes/main/Main'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Header/>
    <Portfolio/>
    <Main/>
    <Footer/>
    </>,
  },
  {
    path: "/noticias",
    element: <div>Página de notícias</div>,
  },
  {
    path: "/sobre",
    element: <div>Página sobre</div>,
  },
  {
    path: "/contato",
    element: <>
    <Header/>
    <Contato/>
    <Footer/>
    </>
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)