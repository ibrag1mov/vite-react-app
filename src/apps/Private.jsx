import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PrivateHeader } from '../components/PrivateHeader/PrivateHeader'
import { Posts } from '../pages/Posts/Posts'
import { PrivateHome } from '../pages/PrivateHome/PrivateHome'
import { Todos } from '../pages/Todos/Todos'
import { Users } from '../pages/Users/Users'

export const Private = () => {
  return (
    <div>
        <PrivateHeader/>
        <div>
            <div className="container">
                <Routes>
                  <Route index path='/' element={<PrivateHome/>}/>
                  <Route path='/todos' element={<Todos/>}/>
                  <Route path='/posts' element={<Posts/>}/>
                  <Route path='/users' element={<Users/>}/>
                  <Route path='*' element={<h2 className='text-center my-5'>Not found!!</h2>}/>
                </Routes>
            </div>
        </div>
    </div>
  )
}
