import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { priveteRoutes, publicRoutes } from '../router'

const AppRouter = () => {
  return (
    <Routes>
      {
      priveteRoutes.map(route => 
          <Route 
            path={route.path}
            element={route.component()}
            key={route.path}
          />
        )
      }

      {
      publicRoutes.map(route => 
          <Route 
            path={route.path}
            element={route.component()}
            key={route.path}
          />
        )
      }
    </Routes>
  )
}

export default AppRouter