import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import './assets/index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
 
<BrowserRouter>
<Routes>
<Route path='/' element={<App/>}></Route>

</Routes>
</BrowserRouter>

 
 
)
