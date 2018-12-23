
//const y = new Set()

const onChange = (e,self) => {
  console.log(e)
  console.log(">>>>>>>>>", self.element.id, document.activeElement.id)
  // console.log("dif hights " , e.srcElement.scrollHeight ,  e.srcElement.clientHeight)
  // let srcRange = document.createRange()
  // srcRange.setStart(e.srcElement, 0)
  // srcRange.setEnd(e.srcElement, e.srcElement.children.length)
  // console.log(" src range: ", srcRange)
  // console.log("src rect:",   srcRange.getBoundingClientRect())

  // let lastChildRange = document.createRange()
  // lastChildRange.setStart(e.srcElement.lastChild, 0)
  // lastChildRange.setEnd(e.srcElement.lastChild, e.srcElement.lastChild.length)
  //  console.log("laschil rect:  ", lastChildRange.getBoundingClientRect())
  //  console.log("lastchild rang: " , lastChildRange)

 if(e.srcElement.scrollHeight > e.srcElement.clientHeight){
        self.props.goToNextPage( {id: self.element.id, content: e.srcElement.lastChild})
 }

 if(e.inputType === 'deleteContentBackward'){
   console.log("deleting..", e)
   console.log("selection " , window.getSelection())
   let selection = window.getSelection()
   if(selection.anchorNode === e.srcElement && selection.anchorOffset === 0){
     console.log("......make a method to go to last page.....")
      //self.props.goToLastPage({id: self.element.id, content: e.srcElement.firtChild})
      if(e.srcElement.id === "0") return; 
      let prevId = (Number(e.srcElement.id) - 1).toString();
      document.getElementById(prevId).focus();
   }
 }

 
 

}
export default onChange;