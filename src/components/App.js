import React from 'react'
import Menu from './menu'
import Pages from './pages'
import '../fontawsome/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


const App = () => (
  <div  className="container-fluid">
    <Menu />
    <Pages/>
  </div>
)

export default App
