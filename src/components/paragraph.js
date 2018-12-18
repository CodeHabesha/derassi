import React from "react";
import PropTypes from 'prop-types';
import { timingSafeEqual } from "crypto";


class Paragraph extends React.Component {
     constructor(props){
        super(props)
        this.handlePaste = this.handlePaste.bind(this);
        this.handleOverflow = this.handleOverflow.bind(this);
     }
     componentDidMount(){
        this.element.focus();
        this.element.className = "paragraph"
        this.element.addEventListener("paste", this.handlePaste)
        this.element.addEventListener("overflow", this.handleOverflow)
     }


     handleOverflow = (e) => {
         console.log("..overflow...", e)
     }
     handlePaste = (e) => {
         console.log("...pasted  heights compare",  this.element.offsetHeight, e.currentTarget, e.offsetHeight)
        
         //console.log("..value...", e.clipboardData.getData('text/plain'))
         //this.element.value = this.element.value
     }

    render(){
        return (
            <div contentEditable = {true}  id={this.props.id} ref={ (element) => this.element = element } onKeyDown={this.props.onKeyDown} onKeyPress={this.props.onKeyPress}> </div>
        )
    }
   
}

export default Paragraph;
