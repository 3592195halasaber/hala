
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './Componant/LayOut/LayOut'
import Footer from './Componant/Footer/Footer'
import Contant from './Componant/LayOut/Contant'
import Portfolio from './Componant/LayOut/Portfolio'
import About from './Componant/LayOut/About'
import Home from './Componant/LayOut/Home'
import NotFoned from './Componant/NotFoned/NotFoned'

import"flowbite/dist/flowbite.js";

const routing = createBrowserRouter([

  {
    element: <LayOut />, path: "", children: [
      { index: true, element: <Home /> },
      { path:"Home", element: <Home /> },
      { path: "Portfolio", element: <Portfolio /> },
      { path: "About", element: <About /> },
      { path: "Contant", element: <Contant /> },
      { path: "*", element: <NotFoned /> }]
  }

])
function App() {

  return (
    <>
      <RouterProvider router={routing}></RouterProvider>

    </>
  )
}

export default App
