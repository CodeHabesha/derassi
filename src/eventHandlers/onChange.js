
import { findLastTextNode } from '../helpers'
import { node } from 'prop-types';


const onChange = (e, self) => {

  if (e.srcElement.scrollHeight > e.srcElement.clientHeight) {

    let selection = window.getSelection()
    let range = selection.getRangeAt(0)
    let divs = e.srcElement.getElementsByTagName('div')
    let lastDivNode = divs[divs.length - 1]
    let content = fixLastNode(e.srcElement, lastDivNode)
    let focus = (range.endContainer === lastDivNode)

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

const fixLastNode = (parent, el) => {
  
  let nodes = el.childNodes
  let array = []
  let i = 0;
  while (i < nodes.length) {
    if (nodes[i].nodeType === Node.TEXT_NODE) {
      let j = 0;
      let text = nodes[i].textContent
      while (j < text.length) {
        array.push(text[j]);
        j++;
      }
    } else {
      array.push(nodes[i])
    }
    i++;
  }

  
  let lastDiv = document.createElement('div')
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    lastDiv.appendChild((element instanceof Node) ? element : document.createTextNode(element))
  }

  el.remove()
  let p = parent.appendChild(lastDiv) //each character is a node now. 
  let divs = parent.getElementsByTagName('div')
  let lastDivNode = divs[divs.length - 1]
  let lastLine = document.createElement('div')
  lastLine.append("")

  let rect = lastDivNode.getBoundingClientRect()
  let height = rect.height

  let children = lastDivNode.childNodes
  let k = children.length - 1
  while (1) {
    if (k < 0) break;
    let lastChild = children[k]
    let clone = lastChild.cloneNode(true);
    lastLine.insertBefore(clone, lastLine.lastChild)
    lastChild.remove()

    rect = lastDivNode.getBoundingClientRect()
    if (height !== rect.height) break;
    height = rect.height
    k--;
  }
  return lastLine
}


export default onChange;