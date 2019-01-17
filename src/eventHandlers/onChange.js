
import { replaceCaret } from "../helpers";

const onChange = (e, self) => {

   /*
   
   Todos: 
   remove dependency on scrollheight, it only works for the first page 
   focus = lastnode ==== e.serElement.lastchild should change to a more sesible logic


   issues: if carot is at first line, pushing to next page does not work, only if pusing starts from second or more lines. 
   focus logic is not relable ... change that. 

   




   */

  if (e.srcElement.scrollHeight > e.srcElement.clientHeight) {

    console.log(e.srcElement.scrollHeight, e.srcElement.clientHeight, e.srcElement.id )
    
    let selection = window.getSelection()
    let lastNode = e.srcElement.childNodes[selection.anchorOffset]
    let focus = (lastNode === e.srcElement.lastChild);
    console.log(focus)
    let content = ""
    if(!focus) {
       content = moveLastLine(e.srcElement)
       console.log(content)
    }
    
    self.props.goToNextPage({ id: self.element.id, content: content, focus: focus })
  }



  if (e.inputType === 'deleteContentBackward') {
    
    let selection = document.getSelection()
    let firstNode = e.srcElement.childNodes[selection.anchorOffset]
    let focus = (firstNode === e.srcElement.firstChild)
    //console.log(selection, firstNode, focus, e.srcElement.firstChild)
    
    if(focus){
        console.log(".......foucs.....", focus)
       self.props.goToPreviousPage(e.srcElement.id)
    }

    if (e.srcElement.scrollHeight <= e.srcElement.clientHeight) {
        console.log("...backing up ")
        let prevId = (Number(e.srcElement.id) + 1).toString();
        let prevElement = document.getElementById(prevId)
        if(prevElement){
          let content = moveFirstLine(prevElement)
          e.srcElement.append(content)
          if(prevElement.childNodes.length === 0 ){
            self.props.removePage(prevElement.id)
          }
        }

      }
     
  }
}

const moveLastLine = (element) => {

  let style = window.getComputedStyle(element)
  let padding = Number(style.paddingTop.slice(0,-2))
  let pageHeight = Number(style.height.slice(0,-2)) 
  let border = Number(style.borderTopWidth.slice(0,-2)) 
  let pageLen = pageHeight - padding - border 
  //console.log(padding, height, border, pageLen)
  let range = document.createRange()
  range.selectNodeContents(element)

  let rect = range.getBoundingClientRect();
  //let lastLine = document.createElement('span')
  var lastLine = document.createDocumentFragment();
  let height = rect.height
  let children = element.childNodes
  let index = children.length - 1

  while (height >= pageLen ) {
    if (index < 0) break;
    let lastChild = children[index]
    let clone = lastChild.cloneNode(true);
    lastLine.prepend(clone) //, lastLine.lastChild)
    lastChild.remove()

    range.selectNodeContents(element)
    rect = range.getBoundingClientRect()
    //if (height !== rect.height) break;
    height = rect.height
    index--;
  }

  return lastLine

}






const moveFirstLine = (element) => {

  let range = document.createRange()
  range.selectNodeContents(element)

  let rect = range.getBoundingClientRect();
  let firstLine = document.createElement('span')
  let height = rect.height
  let children = element.childNodes
  let index = 0

  while (1) {
    if (index < 0) break;
    if (children.length === 0) break; 
    let firstChild = children[0]
    console.log(firstChild, index)
    console.log(children)
    let clone = firstChild.cloneNode(true);
    firstLine.prepend(clone) //, lastLine.lastChild)
    firstChild.remove()

    range.selectNodeContents(element)
    rect = range.getBoundingClientRect()
    if (height !== rect.height) break;
    height = rect.height
    index++;
  }

  return firstLine;

}


export default onChange;