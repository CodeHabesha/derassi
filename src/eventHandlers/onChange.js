
import { findLastTextNode } from '../helpers'


const onChange = (e, self) => {

  


  console.log()
  if (e.srcElement.scrollHeight > e.srcElement.clientHeight) {

    let selection = window.getSelection()
    let range =    selection.getRangeAt(0)
 
    let divs = e.srcElement.getElementsByTagName('div')
    let lastDivNode = divs[divs.length - 1]
    
    let content = lastDivNode
    let rect = lastDivNode.getBoundingClientRect()
    
    console.log(rect)

 
  
    let focus = ( range.endContainer === lastDivNode)
    console.log(range)
    
    console.log("should focus ", focus)

    lastDivNode.remove()

    //  divs = e.srcElement.getElementsByTagName('div')
    //  lastDivNode = divs[divs.length - 1]

    let activeElement = document.activeElement
    console.log(activeElement)

    self.props.goToNextPage({ id: self.element.id, content: content, focus: focus })
  }

  if (e.inputType === 'deleteContentBackward') {
    console.log(e.srcElement.id, " going to last page")
    let selection = window.getSelection()
    let range = selection.getRangeAt(0)
    console.log(selection)

    // if top of page is reached...
    if (range.startContainer === e.srcElement.firstChild && selection.anchorOffset === 0) {
      console.log(e.srcElement.id, " going to previous page")
      //self.props.goToLastPage({id: self.element.id, content: e.srcElement.firtChild})
      if (e.srcElement.id === "0") return;
      let id = e.srcElement.id // (Number(e.srcElement.id) - 1).toString();
      self.props.goToPreviousPage({ id: id, content: e.srcElement.firstChild || "" })
      //document.getElementById(prevId).focus();

    }
  }




}
export default onChange;