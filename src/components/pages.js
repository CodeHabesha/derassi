import React from "react";
import Menu from './menu'
import Paragraph from './paragraph'
import onChange from '../eventHandlers/onChange'
import onKeyDown from '../eventHandlers/onKeyDown'
import onKeyPress from '../eventHandlers/onKeyPress'


const Page = (props) => (
    <div className="page">
        <Paragraph  onChange={props.onChange} onKeyDown={props.onKeyDown} onKeyPress={props.onKeyPress}/>
    </div>
)

/**
 * cotainer for all paragraphs and menues 
 * @class Page
 */
class Pages extends React.Component {
       
       constructor(props){
          super(props)
          this.state = { pages: [<Page onKeyDown={this.handleKeyDown} onKeyPress={this.handleKeyPress} onChange={this.handleChange} on/>]}
          this.handleKeyDown = this.handleKeyDown.bind(this)
          this.handleChange = this.handleChange.bind(this)
          this.handleKeyPress = this.handleKeyPress.bind(this)
       }

       handleKeyDown = (e) => onKeyDown(e)
       handleChange = (e) => onChange(e,self)
       handleKeyPress = (e) => onKeyPress(e)

    render() {
         return(
             <div>
               <Menu/>
                {this.state.pages.map( p => p)}
             </div>
         )
    }
}


export default Pages;
