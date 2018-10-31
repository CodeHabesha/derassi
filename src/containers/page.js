import { connect } from 'react-redux'
import { addText } from '../actions/index'
import Paragraph from '../components/paragraph';
import keyboardMap from '../keyboardMap'


function isConsonant(letter) {
  var c = /[a-bdf-hj-np-tv-wyz]/
  return letter.match(c) !== null;
}


var vowels = ""
var currentConsonant = ""
var index = 0
var out = ""
var save_out = ""


function replace(val){

  //use slice to save state of previous for use with "undo" bottons in word processor
  var s = out.slice(0, index) + val

  out = s;
  
}






const convertEnglishToAmharic = (letter) => {
   console.log(letter)
  if (letter) {
     if (letter.match(/[^a-zA-z]/)) {
        return letter; 
      }

    var consonant = isConsonant(letter);
    if (consonant) {
      out += keyboardMap[letter]
      index = out.length - 1
      currentConsonant = letter;
      //queue.unshift(letter)
    }else {
      vowels += letter
    
      var key = currentConsonant + vowels
      var val = keyboardMap[key]
      if(val){
        replace(val)
      } 
      return; 
    }

    save_out = out; 
    //reset all 
    vowels = ""
    out = ""
    index = 0; 
    return save_out; 
    
  }


}

const mapStateToProps = (state)  =>  ({
  text: state.text.join("")
})

const mapDispatchToProps = dispatch => ({
  onKeyPress: e  =>  dispatch(addText(convertEnglishToAmharic(e.key)) )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Paragraph)
