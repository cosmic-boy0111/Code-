import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Blog from './components/Body/Blog'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
