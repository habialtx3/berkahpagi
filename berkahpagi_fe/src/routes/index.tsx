import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Vendor from '../pages/Vendor'
import Staff from '../pages/Staff'

export default function AppRoutes() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route element={<Home />} path='/' />
                    <Route element={<Products />} path='/products' />
                    <Route element={<Vendor />} path='/vendor' />
                    <Route element={<Staff />} path='/staff' />
                </Route>
            </Routes>
        </>
    )
}
