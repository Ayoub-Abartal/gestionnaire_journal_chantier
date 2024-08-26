import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home, CreateProject, Projects, Dashboard } from "./pages"

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/createProject" element={<CreateProject/>}></Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes;