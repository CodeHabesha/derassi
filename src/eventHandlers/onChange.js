
import { replaceCaret } from "../helpers";

const onChange = (e, self) => {

  let style = window.getComputedStyle(e.srcElement)
  let padding = Number(style.paddingTop.slice(0, -2))
  let pageHeight = Number(style.height.slice(0, -2))
  let border = Number(style.borderTopWidth.slice(0, -2))
  let pageLen = pageHeight - padding - border

  let firstNode = e.srcElement.firstChild
  let lastNode = e.srcElement.lastChild
  let range = document.createRange()

  range.setStart(firstNode, 0)
  range.setEnd(lastNode, 0)

  let rect = range.getBoundingClientRect()

  if (rect.height > pageLen) {
    
    let selection = window.getSelection()
    let selRange = document.createRange()

    selRange.setStart(firstNode, 0)
    selRange.setEnd(selection.anchorNode, 0)

    let selRect = selRange.getBoundingClientRect()
    let focus = (selRect.height >= pageLen)
    let content = moveLastLine(e.srcElement, pageLen)

    self.props.goToNextPage({ id: self.element.id, content: content, focus: focus })
  }



  if (e.inputType === 'deleteContentBackward') {

    // let style = window.getComputedStyle(e.srcElement)
    // let padding = Number(style.paddingTop.slice(0,-2))
    // let pageHeight = Number(style.height.slice(0,-2)) 
    // let border = Number(style.borderTopWidth.slice(0,-2)) 
    // let pageLen = pageHeight - padding - border 
    let focus = true //( e.srcElement.id != "0" && selection.anchorNode === e.srcElement.firstNode )
    console.log(focus, rect)
    if (focus) {
      console.log(".......foucs.....", focus, rect)
      self.props.goToPreviousPage(e.srcElement.id)
    }

    if (rect.height <= 0) {
      console.log("...backing up ")
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
}

const moveLastLine = (element, pageLen) => {

  // let style = window.getComputedStyle(element)
  // let padding = Number(style.paddingTop.slice(0,-2))
  // let pageHeight = Number(style.height.slice(0,-2)) 
  // let border = Number(style.borderTopWidth.slice(0,-2)) 
  // let pageLen = pageHeight - padding - border 

  //console.log(padding, height, border, pageLen)
  let range = document.createRange()
  range.setStart(element.firstChild, 0)
  range.setEnd(element.lastChild, 0)

  let rect = range.getBoundingClientRect();
  //let lastLine = document.createElement('span')
  var lastLine = document.createDocumentFragment();
  let height = rect.height
  let children = element.childNodes
  let index = children.length - 1
  console.log(height, pageLen)
  while (height >= pageLen) {
    //console.log(children[index], " -- ")
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