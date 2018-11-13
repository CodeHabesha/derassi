import React from 'react'
import PropTypes from 'prop-types'

class Paragraph extends React.Component  {


 componentDidMount()  {
    this.input.addEventListener('input', this.props.onChange)
 }


  render = () => {
  
    let letters = this.props.text.map ( (e,i) => <Letter letter={e} key={i} />   )
    return (
    <div>
  
    <p autoFocus contentEditable={true}  onChange={this.props.onChange}  onKeyPress={this.props.onKeyPress} ref={input => this.input = input} >
    
      {letters}
    </p>
  
    </div>
  )

  }
}


const Letter = ({letter}) => 
      <span style={{color: 'red'}}>{letter}</span>


Paragraph.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  text: PropTypes.array.isRequired
}

export default Paragraph;
