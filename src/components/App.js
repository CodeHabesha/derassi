import React from 'react'
import Page from '../containers/page'
import { fontStyle}  from '../GLOBAL'
import './App.css'

const App = () => (
  <div style={{fontFamily: fontStyle.currentStyle}} >
    <Page/>
  </div>
)

export default App
