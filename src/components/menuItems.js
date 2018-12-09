import React from "react";
import {fontStyle} from '../GLOBAL'


/**
 * A DRYed out utility fuction used for most/all MenuItems
 * @param {Object} props 
 * @return {Void} calls browser with execCommand
 */
const executeCommand = (props) => {

  //console.log("..........menu button......")
  //console.log(props)

  document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
}

/**
 * General purpose edit button
 * @class EditButton a React Fuctional component
 * @param {Object} props contains {name:, value:} object
 */
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

/**
 * A generic list type for dropdown menus
 * @class GeneralList 
 * @param {Object} props 
 */

export  const GenericList = class GenericList extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        
    }

    handleChange(e){
        if(this.props.setGlobal && this.props.setGlobal.should){
          switch(this.props.setGlobal.case){
            case 'fontStyle':
              fontStyle.setFont(e.target.value)
              break;
            case 'fontSize':
             //TEMPORARY HACK to get it woring
                executeCommand( { cmd: this.props.cmd, arg: e.target.value/13 } ) 
              return;
          }
        }
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

