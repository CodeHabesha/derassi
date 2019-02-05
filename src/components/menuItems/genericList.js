import React from "react";
import executeCommand from './menuHelpers'


const GenericList = class GenericList extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        executeCommand( { cmd: this.props.cmd, arg: e.target.value } ) 
    }

  render(){
    let values = this.props.values.map( (val,i) => <option className="dropdown-item" value={val.value}  key={i}> {val.name} </option>)
    return(
      <div className="dropdown-munu">
      <button>{this.props.heading}</button>
      <select onChange={this.handleChange}>
          {values}
      </select>
      </div>

    )
  }
}

export   default GenericList;

