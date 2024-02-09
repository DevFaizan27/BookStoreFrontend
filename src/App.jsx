import React from 'react'
import {Routes ,Route} from 'react-router-dom';
import CreateBook from './pages/CreateBook';;
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import Home from './pages/Home';
import ShowBook from './pages/ShowBook';
import Login from './pages/login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path='/books/create' element={<ProtectedRoute><CreateBook/></ProtectedRoute>}/>
      <Route path='/books/details/:id' element={<ProtectedRoute><ShowBook/></ProtectedRoute>}/>
      <Route path='/books/edit/:id' element={<ProtectedRoute><EditBook/></ProtectedRoute>}/>
      <Route path='/books/delete/:id' element={<ProtectedRoute><DeleteBook/></ProtectedRoute>}/>
    </Routes>
  )
}

export default App


export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  if (token) {
    return children
  }
  else {
    return <Navigate to={'/login'} />
  }
}