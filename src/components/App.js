import React from 'react'
import Pages from './pages'
import { fontStyle}  from '../GLOBAL'
import './App.css'


const App = () => (
  <div style={{fontFamily: fontStyle.currentStyle, fontSize: fontStyle.currentSize}} >
    <Pages/>
  </div>
)

export default App
