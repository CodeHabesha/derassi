import React from 'react'

class MenuName extends React.Component {

        constructor(props){
            super(props)
            
            this.state = {
                name: props.name
            }
        }

        render = () => (

            <span> {this.state.name} </span>
        )

}


export default MenuName; 