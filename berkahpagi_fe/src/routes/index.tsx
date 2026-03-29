import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Vendor from '../pages/Vendor'
import Staff from '../pages/Staff'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import ProductPage from '../pages/ProductPage'

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route element={<Home />} path='/' />
                    <Route element={<ProductPage />} path='/products' />
                    <Route element={<Vendor />} path='/vendor' />
                    <Route element={<Staff />} path='/staff' />
                    <Route element={<ProductDetails />} path='/product/:id' />
                    <Route element={<Login />} path='/login' />
                </Route>
            </Routes>
        </>
    )
}
