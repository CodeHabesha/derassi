import React from "react";
import { fontStyle } from '../../GLOBAL'
import executeCommand from './menuHelpers'
import fonts from '../fontFamily'

const EditFont = class EditFont extends React.Component {
    constructor(props){
      super(props)
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
      fontStyle.setFont(e.target.value)
      executeCommand( { cmd: "fontName", arg: e.target.value } ) 
  }
  render(){
    let values =  fonts.map( (font,i) => <option value={font}  key={i}> {font} </option>)
    return(
      <div>
      <select className="form-control" defaultValue={fontStyle.currentStyle} onChange={this.handleChange}>
          {values}
      </select>
      </div>
    )
  }
  }

  export default EditFont;