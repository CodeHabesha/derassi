import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({ onKeyPress, text }) => (
  <div>
  <textarea 
    onKeyPress={onKeyPress}  style={{width: window.innerWidth - 20, paddingLeft: 20}}
  >
  {text}
  </textarea>




  <p>
  
    {text}
  </p>

  </div>
)

Paragraph.propTypes = {
  onKeyPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Paragraph;
