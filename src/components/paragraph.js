import React from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({ onKeyPress, text }) => (
  <div>
  <input 
    onKeyPress={onKeyPress}
  />
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
