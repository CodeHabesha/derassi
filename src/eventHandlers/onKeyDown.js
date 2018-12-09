
import {formatDoc} from '../helpers'



const onKeyDown = (e)  => {
    if (e.key === 'Tab') {
      e.preventDefault();
      formatDoc( e.target, "insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
      return;
    }
    if(e.key === 'Enter' ) {
      e.preventDefault()
      formatDoc(e.target, 'insertParagraph');
     // document.execCommand('insertParagraph',false); 
      return;
    }
}


export default onKeyDown; 
