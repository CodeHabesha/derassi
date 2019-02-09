
import React from 'react'
import { Button } from 'reactstrap'




class ToggleEnglishMenu extends React.Component {

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
            this.props.onMenuToggle()
    }
    render = () => (
            <Button  color="light" onClick={this.handleClick}>
                    <i className="fas fa-arrow-up"></i> <i className="fa fa-toggle-on"> </i>
            </Button>   
    )
}


export default ToggleEnglishMenu; 