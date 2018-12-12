import React from "react";
import PropTypes from 'prop-types';


class Paragraph extends React.Component {
     constructor(props){
        super(props)
     }
     componentDidMount(){
        this.element.focus();
        this.element.className = "paragraph"
        //this.element.addEventListener("input", this.props.onChange)
     }
    render(){
        return (
            <div contentEditable = {true} id={this.props.id} ref={ (element) => this.element = element } onKeyDown={this.props.onKeyDown} onKeyPress={this.props.onKeyPress}> </div>
        )
    }
   
}

export default Paragraph;
