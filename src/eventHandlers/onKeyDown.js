
import {formatDoc} from '../helpers'



const onKeyDown = (e,self)  => {
    if (e.key === 'Tab') {
      e.preventDefault();
      formatDoc( e.target, "insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
      return;
    }
    if(e.key === 'Backspace'){
        console.log(" removing  ", e.target.id)
        console.log(e.target.innerHTML)
        if(!e.target.innerHTML ){
          self.removePage(e.target.id)
        }
        
    }
    if(e.key === 'Enter' ) {
      e.preventDefault()
      formatDoc(e.target, 'insertParagraph');
     // document.execCommand('insertParagraph',false); 
      return;
    }
}


export default onKeyDown; 
