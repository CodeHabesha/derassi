
import React from "react";
import { executeCommand } from '../menuHelpers'
import { Button } from 'reactstrap';
import { SketchPicker } from 'react-color';


const EditColor = class EditColor extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleChange = this.handleChange.bind(this)
        
        this.state = {
          displayColorPicker: false,
          color: "white"
        };
    }
    handleClick = () => {
      this.setState({ displayColorPicker: true })
    };
    handleClose = () => {
      console.log(this.state.color.hex, " closing ..")
      executeCommand({cmd:this.props.cmd, arg: this.state.color.hex})
      this.setState({ displayColorPicker: false })
      
    };
    handleChange = (color) => {
      this.setState({ color: color })
      console.log(color)
     
    };
  

    render() {

      const popover = {
        position: 'absolute',
        zIndex: '2',
      }
      const cover = {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      }
  
      return (
        <div>
          <Button  color="light" onClick={ this.handleClick }>
          <i className={this.props.icon}></i>
          </Button>
          { this.state.displayColorPicker ? <div style={ popover } onDoubleClick={ this.handleClose }>
            <div style={ cover } onDoubleClick={ this.handleClose }/>
            <SketchPicker color={ this.state.color } onChange={ this.handleChange }  />
          </div> : null }
  
        </div>
      )
    }
  }


export  default EditColor;


