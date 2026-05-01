import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Vendor from '../pages/Vendor'
import Staff from '../pages/Staff'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import ProductPage from '../pages/ProductPage'
import StockPage from '../pages/StockPages'
import SalesPage from '../pages/SalesPage'

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    {/* all role */}
                    <Route element={<Login />} path='/login' />
                    <Route element={<ProductPage />} path='/products' />

                    {/*vendor */}
                    <Route element={<Vendor />} path='/' />
                    <Route element={<Vendor />} path='/vendor' />
                    <Route element={<SalesPage />} path='/sales' />
                    
                    {/* staff pages */}
                    <Route element={<Staff />} path='/staff' />
                    <Route element={<StockPage />} path='/stocks' />
                    <Route element={<ProductDetails />} path='/product/:id' />
                </Route>
            </Routes>
        </>
    )
}
