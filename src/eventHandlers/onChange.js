
const y = new Set()

const onChange = (e,self) => {
    
 console.log(e.srcElement.firstChild,e.srcElement.lastChild)
  let range  = document.caretRangeFromPoint(0, 0);
//  //console.log(range)
 let selection = window.getSelection()
 
  //let range = selection.getRangeAt(1)
  range.setStart(selection.anchorNode, 0)
  range.setEnd(e.srcElement.lastChild, 0)
  console.log(range.END_TO_END)
  console.log(selection)
  console.log(range)
  console.log("achornode: ", selection.anchorNode, "focus node  ", selection.focusNode, "anchor offset: ",  selection.anchorOffset,  "base node: ", selection.baseNode, " base offset",  selection.baseOffset)

  let caretPosition = document.caretPositionFromPoint;
  if(caretPosition){ 
    console.log("carontpostion ", document.caretPositionFromPoint(100,100))}

  //    console.log(selection.getRangeAt(0), " rang at zero ")
//    range.setStart(selection.anchorNode, 0)
//    range.setEnd(e.srcElement.lastChild, 0 )
 
//   if (!window.getSelection().rangeCount) return; 
//   console.log(window.getSelection())
//   console.log(range)

//  let pageHeight = range.getClientRects().length *  range.getClientRects()[range.getClientRects().length - 1].height
//  console.log(pageHeight)
//  console.log(e.srcElement.scrollHeight)

//  let lastContent = ""
//  if(pageHeight >= 1000){
//         //self.props.goToNextPage( {id: self.element.id, content: e.srcElement.lastChild})
//         console.log(" .. end reached.....")
//         console.log(range)
//         console.log( "end", e.srcElement.children.length)
//         lastContent = e.srcElement.lastChild.innerText 
//         console.log("last content: ", lastContent)
//         let removed = e.srcElement.removeChild(e.srcElement.lastChild)
//         range.setEnd(e.srcElement.lastChild, 0 )
//         console.log("removed ", removed)
    
//        console.log( "end", e.srcElement.children.length)
        

 //}
 
 

}
export default onChange;