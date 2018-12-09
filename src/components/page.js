import React from "react";
import Menu from './menu'
import Paragraph from './paragraph'
import onChange from '../eventHandlers/onChange'
import onKeyDown from '../eventHandlers/onKeyDown'
import onKeyPress from '../eventHandlers/onKeyPress'


/**
 * cotainer for all paragraphs and menues 
 * @class Page
 */
class Page extends React.Component {
       
       constructor(props){
          super(props)
          this.handleKeyDown = this.handleKeyDown.bind(this)
          this.handleChange = this.handleChange.bind(this)
          this.hanleKeyPress = this.hanleKeyPress.bind(this)
       }

       handleKeyDown = (e) => onKeyDown(e)
       handleChange = (e) => onChange(e)
       hanleKeyPress = (e) => onKeyPress(e)

    render() {
         return(
             <div>
               <Menu/>
              <div className="page">
                    <Paragraph  onChange={this.handleChange} onKeyDown={this.handleKeyDown} onKeyPress={this.hanleKeyPress}/>
              </div>
             </div>
         )
    }
}


export default Page;
