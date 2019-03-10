
import {replaceCaret} from '../helpers'


const onChange = (e, self) => {
  
  
  let style = window.getComputedStyle(e.srcElement);
  let padding = Number(style.paddingTop.slice(0, -2));
  let pageHeight = Number(style.height.slice(0, -2));
  let border = Number(style.borderTopWidth.slice(0, -2));
  let margin = Number(style.marginTop.slice(0, -2));
  let pageLen = pageHeight - 2*padding - 2*border - 2*margin

  let firstNode = e.srcElement.firstChild
  let lastNode = e.srcElement.lastChild
  let range = document.createRange()
  
  if(!range || !firstNode || !lastNode){
    return;
  }
  
  if(range.setStart(firstNode, 0)){
     range.setStart(firstNode, 0)
  }
  if(  range.setEnd(lastNode, 0)) {
    range.setEnd(lastNode, lastNode.length)
  }
  
  let rect = range.getBoundingClientRect()
  console.log(rect.height, pageLen)

  if (rect && rect.height > pageLen) {
    let selection = window.getSelection()
    let selRange = document.createRange()
    
    selRange.setStart(firstNode, 0)
    selRange.setEnd(selection.focusNode, 0)

    let selRect = selRange.getBoundingClientRect()
    console.log(selRect.height , pageLen)
    let focus = (selRect.height >= pageLen)
    let content = moveLastLine(e.srcElement, pageLen)

    self.props.goToNextPage({ id: self.element.id, content: content, focus: focus })
  }

  if (e.inputType === 'deleteContentBackward') {

    let sel = window.getSelection()
    let range = document.createRange()
    let startNode = e.srcElement.firstChild
    if( range.setStart(startNode, 0)){
      range.setStart(startNode, 0)
    }
    if(range.setEnd(sel.anchorNode, 0)){
      range.setEnd(sel.anchorNode, 0)
    }
   

    let rect = range.getBoundingClientRect()
    let focus = (rect.height <= startNode.getBoundingClientRect().height && sel.anchorNode === startNode)
  
    if (focus) {
      if(e.srcElement.id === "0"){
        return 
      }
      self.props.goToPreviousPage(e.srcElement.id)
    }
      let prevId = (Number(e.srcElement.id) + 1).toString();
      let prevElement = document.getElementById(prevId)
      if (prevElement) {
        let content = moveFirstLine(prevElement)

        e.srcElement.append(content)

        if (prevElement.childNodes.length === 0) {
          self.props.removePage(prevElement.id)
        }
      }
  }
}

const moveLastLine = (element, pageLen) => {
  let range = document.createRange()
  range.setStart(element.firstChild, 0)
  range.setEnd(element.lastChild, 0)

  let rect = range.getBoundingClientRect();
  var lastLine = document.createDocumentFragment();
  let height = rect.height
  let children = element.childNodes
  let index = children.length - 1
  
  while (height >= pageLen) {
    if (index < 0) break;
    let lastChild = children[index]
    let clone = lastChild.cloneNode(true);

    lastLine.prepend(clone) //, lastLine.lastChild)
    lastChild.remove()
    range.selectNodeContents(element)
    rect = range.getBoundingClientRect()
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