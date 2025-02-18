import './App.css'
import Layout from './layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
    ]
  }])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
