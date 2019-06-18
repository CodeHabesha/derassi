import React from "react"
import onChange from '../../eventHandlers/onChange'
import onKeyDown from '../../eventHandlers/onKeyDown'
import onKeyPress from '../../eventHandlers/onKeyPress'


class  Page extends React.Component {

    constructor(props){
        super(props)
        
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        
    }
    
       handleKeyPress = (e) => onKeyPress(e,this)
       handleChange = (e) => onChange(e,this)
       handleKeyDown = (e) => onKeyDown(e,this)
       handleFocus = (e) => {
           console.log(" focus called on ", this.element.id)
       }
       

    componentDidMount(){
        console.log("...page focus", this.props.focus)
        if(this.props.focus) {this.element.focus()} ;
        this.element.id = this.props.id
        this.element.addEventListener("input", this.handleChange)
        this.element.addEventListener("focus", this.handleFocus)

        }
    
   
    render(){
        return(
        <div contentEditable={true} className="page"  
            id={this.props.id} ref={ el => this.element = el} 
            onKeyDown={this.handleKeyDown} onKeyPress={this.handleKeyPress}  >
            {/* <Paragraph id={this.props.id}   onKeyDown={this.props.onKeyDown} onKeyPress={this.handleKeyPress}/> */}
        </div>
        )
    }
}


export default Page; 

