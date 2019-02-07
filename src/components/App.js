import React from 'react'
import Menu from './menu'
import Pages from './pages'
import '../fontawsome/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Title from './title'
import TextMenu from './textMenu'


const App = () => (
  <div >
    <nav className="sticky-top">
      <Title/>
      <TextMenu/>
      <Menu />
    </nav>

    <Pages/>
    
  </div>
)

export default App

// const Separator = () => (
//   <hr height="10px" border="none"></hr>
// )