import React from "react";
import { fontStyle } from '../../../GLOBAL'
import executeCommand from './menuHelpers'
import fonts from './fontFamily'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import keyboardMap from '../../../keyboardMap'

class EditFont extends React.Component {
    constructor(props){
      super(props)
      this.toggle = this.toggle.bind(this);
      this.state = {
        dropdownOpen: false
      };
      this.handleChange = this.handleChange.bind(this)
      this.getMeaning = this.getMeaning.bind(this)
      this.unquote = this.unquote.bind(this)
    }
    toggle() {
      this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
      }));
    }
    unquote(string){
        let newstr = ""
        for(let str of string){
            if(str !== "\""){
                newstr += str
            }
        }
        return newstr
    }
    getMeaning = ( font ) => {

        if(!this.props.abeshaMenu){
            return font
        }
        let amharics = fonts[font] || fonts[fontStyle.currentStyle]
        if(!amharics){return font} 
        let meaning = ""
        for(let am of amharics){
            keyboardMap[am]  ?  (meaning += keyboardMap[am]) : (meaning += " ")
        }
        return <AmharicStyle fontFamily={font} meaing={meaning}/>
    }
    

    handleChange(e){
      this.props.abeshaMenu ? fontStyle.setFont(this.unquote(e.target.style.fontFamily)) : fontStyle.setFont(e.target.value)
      executeCommand( { cmd: "fontName", arg: fontStyle.currentStyle }) 
  }
  render(){
    let values =  Object.keys(fonts).map( (font,i) => <DropdownItem  onClick={this.handleChange} key={i} value={font} >{this.getMeaning(font) || font}</DropdownItem>)
    return(
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle  color="light" caret>
            {this.props.abeshaMenu ? this.getMeaning(fontStyle.currentStyle) : fontStyle.currentStyle}
        </DropdownToggle>
        <DropdownMenu>
          {values} 
        </DropdownMenu>
      </Dropdown>
    )
  }
  }

  export default EditFont;


const AmharicStyle = (props) => (
    <span style={{fontFamily: props.fontFamily}}> {props.meaing} </span>
)