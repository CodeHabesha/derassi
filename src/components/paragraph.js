import React from "react";
import PropTypes from 'prop-types';
import { timingSafeEqual } from "crypto";


class Paragraph extends React.Component {
     constructor(props){
        super(props)
        this.handleFocus = this.handleFocus.bind(this)
     }
     componentDidMount(){
        this.element.focus();
        this.element.className = "paragraph"
        //this.element.addEventListener("input", this.props.onChange)
     }

     handleFocus = (e) => {
         console.log("pragraph focused... ", this.props.id, "...", e)
         //this.element.value = this.element.value
     }

    render(){
        return (
            <div contentEditable = {true} onFocus={this.handleFocus} id={this.props.id} ref={ (element) => this.element = element } onKeyDown={this.props.onKeyDown} onKeyPress={this.props.onKeyPress}> </div>
        )
    }
   
}

export default Paragraph;
