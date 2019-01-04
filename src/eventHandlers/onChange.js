
import { findLastTextNode } from '../helpers'
import { node } from 'prop-types';


const onChange = (e, self) => {

  


  console.log()
  if (e.srcElement.scrollHeight > e.srcElement.clientHeight) {

    let selection = window.getSelection()
    let range =    selection.getRangeAt(0)
 
    let divs = e.srcElement.getElementsByTagName('div')
    let lastDivNode = divs[divs.length - 1]
    
    //let content = lastDivNode 
    //getLastLine1(e.srcElement, lastDivNode)
    let content = getLastLine(e.srcElement, lastDivNode)
    let rect = lastDivNode.getBoundingClientRect()
    
    console.log(rect)
   console.log(content, "   content")
 
  
    let focus = ( range.endContainer === lastDivNode)
    console.log(range)
    
    console.log("should focus ", focus)

    //lastDivNode.remove()

    //  divs = e.srcElement.getElementsByTagName('div')
    //  lastDivNode = divs[divs.length - 1]

    

    //self.props.goToNextPage({ id: self.element.id, content: content, focus: focus })
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

const getLastLine1 = (parent, el) => {
    let rect = el.getBoundingClientRect()
    console.log(rect)
    let range = document.createRange()
        range.selectNodeContents(el)
    console.log(range)
}

const getLastLine = (parent, el) => {
    console.log("node, " , el) 
    if(!el) return ""; 
    let nodes = el.childNodes
    let array = []

    let i = 0 ;
    while(i < nodes.length){
      if(nodes[i].nodeType === Node.TEXT_NODE){
           let j = 0; 
           let text = nodes[i].textContent
           while(j < text.length){
             array.push(text[j]); 
             j++;
             
           }
           
      }else{
        array.push(nodes[i])
        
      }
      i++; 
    }
    console.log(array)
    let lastDiv = document.createElement('div')
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      console.log(element, typeof element, element instanceof Node)
      lastDiv.appendChild( (element instanceof Node) ? element : document.createTextNode(element) )
    }
    console.log(lastDiv)
    //el.remove()
    //parent.appendChild(lastDiv) //each character is a node now. 

    //lastDiv = parent.lastChild
    
    let lastLine = document.createElement('div')
        //lastLine.append("=>")
    
    // let range = document.createRange()
    //     range.selectNodeContents(lastDiv)
    
    let rect = lastDiv.getBoundingClientRect()
    let height = rect.height 

    while(1){
      
        let lastChild = lastDiv.lastChild
        if(!lastChild) break; 
        console.log( "....   => ", typeof lastChild , lastChild)
        lastLine.appendChild(lastChild)
        
        lastDiv.removeChild(lastDiv.lastChild);
    
        rect = lastDiv.getBoundingClientRect()

        if(height !== rect.height) break; 
        height = rect.height 

    }
     console.log(lastLine)
     
     return lastLine
    
    // let rect = range.getBoundingClientRect()

    // console.log(rect)

    // let iterRange = document.createRange()
    //     iterRange.setStart(lastDiv, 0)
    
    // let childern = lastDiv.children 
    // let len = childern.length 

    // let j = 0 ;
    // while(j < len ){
    //    iterRange.setEnd(lastDiv, j)
    //    let iterRect = iterRange.getBoundingClientRect()
       
    //    console.log(iterRange)
    //    console.log(iterRect)
    //    j++; 

    // }


    
    // , childeren.length)
    //  let range = document.createRange();
    //      range.setStart(el.firstChild, 0)
    //      range.setEnd(el.lastChild, 0) //last child is usually br
    // let rect = range.getBoundingClientRect()   
    // let line = document.createElement('div')
    // let top = 0
    // let lineChange = 0 
    // let i = 0  
    //     while(top <= rect.bottom && i < el.innerHTML.length){
    //       if(lineChange !== top){
    //         lineChange = top
    //         top = rect.top 
    //       }
           
    //        i += 1; 
    //     }
    //     console.log(i, " .....last offset")
    //     console.log(range)
    //     console.log(range.getBoundingClientRect())
    //     console.log(line)
    // let textNode = node.firstChild // <div> text <br></div>
}
export default onChange;