
import {formatDoc} from '../helpers'
import sanitizeHtml from 'sanitize-html'



const onKeyDown = (e,self)  => {
    if (e.key === 'Tab') {
      e.preventDefault();
      formatDoc( e.target, "insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
      return;
    }
    if(e.key === 'Backspace'){
        
        // console.log(" removing  ", e.target.id)
        // console.log(e.target.innerHTML)
        let clean = sanitizeHtml(e.target.innerHTML )
        //console.log(clean)
        if(clean.length === 0 || e.target.innerHTML === '<br>' && e.target.id !== "0" ){
          self.removePage(e)
        }
        return; 
    }
    if(e.key === 'Enter' ) {
      e.preventDefault()
      //(e.target, 'insertParagraph');
      formatDoc(e.target, "insertHTML", '<br><br>')
     // document.execCommand('insertParagraph',false); 
      return;
    }
}


export default onKeyDown; 
