import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
//import { priveteRoutes, publicRoutes } from '../router'
import Login from '../pages/Login'
import TaskListPage from '../pages/TaskListPage'
import TaskPage from '../pages/TaskPage'
import MainPage from '../pages/MainPage'
import ReactContextApiPage from '../pages/ReactContextApiPage'
import MemoizationPage  from '../pages/MemoizationPage'
import AboutPage from '../pages/AboutPage'

const AppRouter = () => {
  return (
    <Routes>
      {/* <Route index element={<Navigate replace to="/login" />}/> */}
      <Route path='/login' element={<Login />}/>
      <Route path='/' element={<MainPage />} />
      <Route path='/tasks' element={<TaskListPage />} />
      <Route path='/react-provider' element={<ReactContextApiPage />} />
      <Route path='/tasks'>
        <Route path=':id' element={<TaskPage />} />
      </Route>
      <Route path='/memoization' element={<MemoizationPage />} />
      <Route path='/about' element={<AboutPage />} />

      {
    //   priveteRoutes.map(route => 
    //       <Route 
    //         path={route.path}
    //         element={route.component()}
    //         key={route.path}
    //       />
    //     )
    //   }

    //   {
    //   publicRoutes.map(route => 
    //       <Route 
    //         path={route.path}
    //         element={route.component()}
    //         key={route.path}
    //       />
    //     )
      }
    </Routes>
  )
}

export default AppRouter