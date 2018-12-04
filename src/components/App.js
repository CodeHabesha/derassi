import React from 'react'
import Page from '../containers/page'
import { fontStyle}  from '../GLOBAL'
import './App.css'
import Paragraphs from './paragraphs'

const App = () => (
  <div style={{fontFamily: fontStyle.currentStyle}} >
    <Paragraphs/>
  </div>
)

export default App
