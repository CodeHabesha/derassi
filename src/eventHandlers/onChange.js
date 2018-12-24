
import {findLastTextNode} from '../helpers'


const moveLastLine  = (e, self) => {
  let range = document.createRange()
  range.setStart(e.srcElement, 0)
  range.setEnd(e.srcElement.lastChild, 0)  //the div elment not the br <div> akdsfl <br> </div>
  
  

}
const onChange = (e,self) => {

   let selection = window.getSelection()
  
      

   console.log(selection)
     
   let srcRange = document.createRange()
         srcRange.setStart(e.srcElement, 0)
         srcRange.setEnd(e.srcElement.lastChild, 1)
         let srcRect = srcRange.getBoundingClientRect()
         console.log(srcRange, srcRect)

  let srcElementRectHeight = e.srcElement.getBoundingClientRect().height

 if(e.srcElement.scrollHeight > e.srcElement.clientHeight ){
   console.log(e.srcElement.scrollHeight > e.srcElement.clientHeight )
   console.log(srcElementRectHeight , e.srcElement )
         let range = document.caretRangeFromPoint(srcRect.x, srcRect.y + srcRect.height);
         let textNode = range.startContainer;
         let offset = range.startOffset;
         console.log(" y + heigh", srcRect.y + srcRect.height)
         console.log(range, textNode, offset)
        let content = textNode.textContent // e.srcElement.lastChild //moveLastLine(e,self)
        
         //remove the textnode: TODO 
         //textNode.parentNode.removeChild(textNode);


        //temporarily set focus true
        let focus = true ;
        
        self.props.goToNextPage( {id: self.element.id, content: content, focus: focus})

 }

 if(e.inputType === 'deleteContentBackward'){
   
   let selection = window.getSelection()

   // if top of page is reached...
   if(selection.anchorNode === e.srcElement && selection.anchorOffset === 0){
       console.log(e.srcElement.id , " going to pre")
      //self.props.goToLastPage({id: self.element.id, content: e.srcElement.firtChild})
      if(e.srcElement.id === "0") return; 
      let id = e.srcElement.id // (Number(e.srcElement.id) - 1).toString();
      self.props.goToPreviousPage({id: id, content: e.srcElement.firstChild || ""})
      //document.getElementById(prevId).focus();
      
   }
 }

 
 

}
export default onChange;