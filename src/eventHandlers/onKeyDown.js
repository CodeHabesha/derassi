import {formatDoc} from '../helpers'
import {fontStyle} from '../GLOBAL'

let paraCount = 0; 

const onKeyDown = (e,self)  => {

    // wrap the first prargraph of first page in div, since this is the olny paragraph that won't be
    // because insertParagraph of formatDoc only works after the first paragraph
    if(self.element && self.element.id === "0" && paraCount === 0){
      formatDoc(self.element, "insertParagraph");    // paraCount > 0 prevents exectution from entering here again
      paraCount += 1
     }

    
    if (e && e.key === 'Tab') {
      e.preventDefault();
      document.execCommand("insertHTML", false,
      `<span  style="font-family: ${fontStyle.currentStyle}">\u2001\u2001\u2001\u2001</span>`
      )
       return;
    }
}


export default onKeyDown; 
