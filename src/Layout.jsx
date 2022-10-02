import React from 'react'
import NavBar from './Pages/NavBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <Outlet />
        <NavBar />
    </>
  )
}
