import React from 'react';
import Page from '../containers/page';
import { fontStyle }  from '../GLOBAL';
import './App.css';
import EditButton from './EditButton';
import EditFont from './EditFont';


const App = () => (


  <div>
    <div class="derassi-header">
      <h3>Derassi</h3>
      <EditFont
        fontProperty = "currentStyle"
        systemFont   = {fontStyle}
        value        = {fontStyle.currentStyle}
        list         = {[ "Abesha Arada" ]}
      />
      <EditFont
        fontProperty = "currentSize"
        systemFont   = {fontStyle}
        value        = {fontStyle.currentSize}
        list         = {[ 8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96 ]}
      />
      <EditButton cmd="italic" />
      <EditButton cmd="bold" />
      <EditButton cmd="formatBlock" arg="h1" name="heading" />
      <EditButton
        cmd="createLink"
        arg="https://github.com/lovasoa/react-contenteditable"
        name="hyperlink"
      />
      <button onClick={window.print()}>Print</button>
    </div>
    <div style={{fontFamily: fontStyle.currentStyle, fontSize: `${fontStyle.currentSize}pt`}}>
      <Page/>
    </div>
  </div>
)

export default App;
