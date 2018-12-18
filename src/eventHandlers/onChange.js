


const onChange = (e,self) => {
    //console.log(document.activeElement)
    let pageHeight = document.activeElement.offsetHeight;

    //console.log(pageHeight)
     let pageSize = 1056;
     //console.log(pageSize)
    if( pageHeight > pageSize){
        self.addPage()
    }
    

}
export default onChange;