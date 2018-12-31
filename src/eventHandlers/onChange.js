
import { findLastTextNode } from '../helpers'


const onChange = (e, self) => {

  let selection = window.getSelection()
  console.log(selection.anchorNode.parentElement.id )

  console.log()
  if (e.srcElement.scrollHeight > e.srcElement.clientHeight) {
    let divs = e.srcElement.getElementsByTagName('div')
    let lastDivNode = divs[divs.length - 1]
    let lastDivId = "lastDiv-" + e.srcElement.id
    lastDivNode.setAttribute("id",lastDivId)
    let content = lastDivNode
    console.log(divs)

 


    console.log(selection, selection.anchorNode.id , " .... " , lastDivNode.id)
    let focus = (selection.anchorNode.id === lastDivNode.id) || (selection.anchorNode.parentNode === lastDivNode.id);
    //console.log(selection.anchorNode, selection.focusNode, selection, selection.commonAncestorContainer.parentNode.id)
    console.log(selection.anchorNode, selection.focusNode, lastDivNode)
    console.log("should focus ", focus)

    lastDivNode.remove()

    //  divs = e.srcElement.getElementsByTagName('div')
    //  lastDivNode = divs[divs.length - 1]

    let activeElement = document.activeElement
    console.log(activeElement)

    self.props.goToNextPage({ id: self.element.id, content: content, focus: focus })
  }

  if (e.inputType === 'deleteContentBackward') {

    let selection = window.getSelection()

    // if top of page is reached...
    if (selection.anchorNode === e.srcElement && selection.anchorOffset === 0) {
      console.log(e.srcElement.id, " going to pre")
      //self.props.goToLastPage({id: self.element.id, content: e.srcElement.firtChild})
      if (e.srcElement.id === "0") return;
      let id = e.srcElement.id // (Number(e.srcElement.id) - 1).toString();
      self.props.goToPreviousPage({ id: id, content: e.srcElement.firstChild || "" })
      //document.getElementById(prevId).focus();

    }
  }




}
export default onChange;