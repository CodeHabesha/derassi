import React from "react";
import {fontStyle} from '../GLOBAL'
const executeCommand = (props) => {

  console.log("..........menu button......")
  console.log(props)

  document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
}

export const  EditButton = (props) =>
(
    <img
    key={props.cmd}
    className="intLink"
    src={props.img ? props.img : ""}
    title={props.name || props.cmd}
    onMouseDown={evt => {
      evt.preventDefault(); // Avoids loosing focus from the editable area
      executeCommand(props); // Send the command to the browser
    }}
    >
    
    </img>
  );

  export const FontList = class FontList extends React.Component  { 
    constructor(props){
       super(props)
       
       this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e) => {
      console.log("values of e of ...")
       console.log(e.target.value)
        fontStyle.setFont(e.target.value)
        executeCommand(this.props.cmd, this.props.fontFamily)
    }
    render(){
      let values = this.props.fonts.map( (value,i) => <option value={value.fontFamily}  key={i}> {value.fontFamily} </option>)
      return(
        
        <div >
           <select onClick={this.handleClick}>
            <option className="heading" >- {this.props.heading} -</option>
                {values}
           </select>
        </div>

      )
    }
 
  }


// props: {values: value, name: name, cmd: command, heading: heading}
export  const List = class List extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        executeCommand( { cmd: this.props.cmd, arg: e.target.value } ) 
    }

  render(){

    let values = this.props.values.map( (val,i) => <option value={val.value}  key={i}> {val.name} </option>)
    return(

      <div>

      <select onChange={this.handleChange}>
      <option className="heading" selected>- {this.props.heading} -</option>
          {values}
      </select>
    
      </div>

    )
  }
};

