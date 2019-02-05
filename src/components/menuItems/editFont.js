import React from "react";
import { fontStyle } from '../../GLOBAL'
import executeCommand from './menuHelpers'

const EditFont = class EditFont extends React.Component {
    constructor(props){
      super(props)
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
      fontStyle.setFont(e.target.value)
      executeCommand( { cmd: this.props.cmd, arg: e.target.value } ) 
  }
  render(){
    let values = this.props.values.map( (val,i) => <option value={val.value}  key={i}> {val.name} </option>)
    return(
      <div>
      <select defaultValue={fontStyle.currentStyle} onChange={this.handleChange}>
          {values}
      </select>
      </div>
    )
  }
  }

  export default EditFont;
