
import React from 'react'
import { Button } from 'reactstrap'




class ToggleEnglishBody extends React.Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {toggle: false}
       
    }
    handleClick(e){
        this.props.onBodyToggle()
        this.setState({toggle: !this.state.toggle}) 
    }
    render = () => (
            <Button  color="light" onClick={this.handleClick}>
                    <i className="fas fa-arrow-down">  </i> {this.state.toggle ? <i className="fa fa-toggle-on"></i>  :  <i className="fa fa-toggle-off"></i>}
            </Button>   
    )
}


export default ToggleEnglishBody; 