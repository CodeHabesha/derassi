import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import { currentTitle } from '../GLOBAL'

class Title extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            title: currentTitle.title
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
    }

    handleChange(e){
        console.log(e.target.value)
        this.setState({title: e.target.value})
        currentTitle.setCurrent(this.state.title)
        console.log(currentTitle.title)
    }
    handleEnter(e){
        if(e.key === 'Enter' ) {
            e.preventDefault()
            currentTitle.setCurrent(this.state.title)
            console.log(currentTitle.title)
            return;
          }
    }

    style={ 
    maxHeight: 40
    }
    
    render =  () =>  (
                      <Navbar  color="light" style={this.style}>
                      <NavbarBrand>
                          <div contentEditable={true} onChange={this.handleChange} onKeyDown={this.handleEnter}>{this.state.title}</div>
                      </NavbarBrand>
                      </Navbar>
                      )
    }

export default Title; 