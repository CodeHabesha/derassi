
import React from 'react'
import { Button } from 'reactstrap'




class ToggleEnglishMenu extends React.Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.toggle = false
    }
    handleClick(e){
            this.props.onMenuToggle()
            this.toggle = !this.toggle
    }
    render = () => (
            <Button  color="light" onClick={this.handleClick}>
                    <i className="fas fa-arrow-up">  </i> {this.toggle ? <i className="fa fa-toggle-on"></i>  :  <i className="fa fa-toggle-off"></i>}
            </Button>   
    )
}


export default ToggleEnglishMenu; 