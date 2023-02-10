import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PublicHeader } from '../components/PublicHeader/PublicHeader'
import { Login } from '../pages/Login/Login'
import { PublicHome } from '../pages/PublicHome/PublicHome'
import { Regisetr } from '../pages/Register/Register'

export const Public = () => {
  return (
    <div>
        <PublicHeader/>
        <div>
            <div className="container">
                <Routes>
                    <Route index path='/' element={<PublicHome/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Regisetr/>}/>
                    <Route path='*' element={<h1 className='text-center my-5'>Not foun!</h1>}/>
                </Routes>
            </div>
        </div>
    </div>
  )
}

