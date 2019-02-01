
import {formatDoc} from '../helpers'
import sanitizeHtml from 'sanitize-html'



const onKeyDown = (e,self)  => {
    if (e.key === 'Tab') {
      e.preventDefault();
      formatDoc( e.target, "insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
      return;
    }
    // if(e.key === 'Backspace'){
        
        
    //     let empty = sanitizeHtml(e.target.innerHTML).length === 0 
    //     let dirty = e.target.innerHTML.replace( /(<br>)/g,'') 
        
    //     let deletable = (empty || !dirty) && e.target.id !== "0" 
        
    //     if(deletable){
    //       self.removePage(e)
    //     }
    //     return; 
    // }
    if(e.key === 'Enter' ) {
      e.preventDefault()
      //(e.target, 'insertParagraph');
      //formatDoc(e.target, "insertHTML", '<br><br>')
      // formatDoc(e.target, "insertParagraph"); //better to insertparagraph thatn use brbr
      document.execCommand('insertParagraph',false); 
      return;
    }
}


export default onKeyDown; 
