


const onChange = (e, self) => {



  if (e.srcElement.scrollHeight > e.srcElement.clientHeight) {
     
    let selection = document.getSelection()
    let range = document.createRange()
    range.setStart(selection.focusNode, 0)
    range.setEnd(e.srcElement.lastChild, 0)
    let rect = range.getBoundingClientRect()

    console.log("...")

    console.log(selection, range, rect.height - selection.getRangeAt(0).getBoundingClientRect().height)
    console.log(rect.height, selection.getRangeAt(0).getBoundingClientRect().height )
    let focus = (rect.height - selection.getRangeAt(0).getBoundingClientRect().height) <= 0;
    console.log(focus)
    let content = moveLastLine(e.srcElement)

    self.props.goToNextPage({ id: self.element.id, content: content, focus: focus })



  }

  if (e.inputType === 'deleteContentBackward') {
    
    let selection = document.getSelection()
    let range = document.createRange()
    range.setStart(selection.focusNode, 0)
    range.setEnd(e.srcElement.lastChild, 0)
    let rect = range.getBoundingClientRect()

    // if top of page is reached...
    if (range.startContainer === e.srcElement.firstChild && selection.anchorOffset === 0) {
      console.log(e.srcElement.id, " going to previous page")
      //self.props.goToLastPage({id: self.element.id, content: e.srcElement.firtChild})
      if (e.srcElement.id === "0") return;
      let focus = false; 
      let content = "temporary content "
      let id = e.srcElement.id // (Number(e.srcElement.id) - 1).toString();
      self.props.goToPreviousPage({ id: id, content: content, foucs: focus })
      //document.getElementById(prevId).focus();

    }
  }
}

const moveLastLine = (el) => {

  let range = document.createRange()
  range.selectNodeContents(el)
  let rect = range.getBoundingClientRect();
  console.log(rect)
  let lastLine = document.createElement('span')
  //lastLine.append("")
  let height = rect.height

  let children = el.childNodes
  console.log(children)
  let index = children.length - 1
  while (1) {
    if (index < 0) break;
    let lastChild = children[index]
    let clone = lastChild.cloneNode(true);
    lastLine.prepend(clone) //, lastLine.lastChild)
    lastChild.remove()

    range.selectNodeContents(el)
    rect = range.getBoundingClientRect()
    if (height !== rect.height) break;
    height = rect.height
    index--;
  }
  console.log(lastLine, " last line")
  return lastLine

}
const fixLastNode = (parent, el) => {
  console.log(el.childNodes.length, el, el.content)
  if (el.childNodes.length === 0) {
    el.remove()
    return document.createElement('div')
  }
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
  //lastLine.append("")

  let rect = lastDivNode.getBoundingClientRect()
  let height = rect.height

  let children = lastDivNode.childNodes
  let k = children.length - 1
  while (1) {
    if (k < 0) break;
    let lastChild = children[k]
    let clone = lastChild.cloneNode(true);
    lastLine.prepend(clone) //, lastLine.lastChild)
    lastChild.remove()

    rect = lastDivNode.getBoundingClientRect()
    if (height !== rect.height) break;
    height = rect.height
    k--;
  }

  return lastLine
}


export default onChange;