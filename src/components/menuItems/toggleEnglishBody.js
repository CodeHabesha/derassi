
import React from 'react'
import { Button } from 'reactstrap'




class ToggleEnglishBody extends React.Component {

    constructor(props){
        super(props)
        console.log(props)
    }
    handleClick(e){
          
    }
    render = () => (
            <Button  color="light" onClick={this.handleClick}>
                    <i className="fas fa-arrow-down"></i> <i className="fa fa-toggle-on"> </i>
            </Button>
        
    )
}


export default ToggleEnglishBody; 