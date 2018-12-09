import React from 'react'
import Page from './page'
import { fontStyle}  from '../GLOBAL'
import './App.css'


const App = () => (
  <div style={{fontFamily: fontStyle.currentStyle, fontSize: fontStyle.currentSize}} >
    <Page/>
  </div>
)

export default App
