import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Home, Layout } from './pages/lazy/lazy'
import { Career } from './pages/lazy/lazy'
import { Category } from './pages/lazy/lazy'
import { Instructor } from './pages/lazy/lazy'
import { Single } from './pages/lazy/lazy'
import { Student } from './pages/lazy/lazy'
import { Career2 } from './pages/lazy/lazy'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={"loading..."}>
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path='career' element={<Career/>}/>
              <Route path='catigory' element={<Category/>}/>
              <Route path='instructor' element={<Instructor/>}/>
              <Route path='single' element={<Single/>}/>
              <Route path='student' element={<Student/>}/>
              <Route path='career2' element={<Career2/>}/>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App