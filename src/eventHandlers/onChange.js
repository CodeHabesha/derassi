


const onChange = (e,self) => {
    console.log(",,,,,", e)
    console.log(",,,,,,,,,", self)
    let pageHeight = document.activeElement.offsetHeight;

    console.log("Height ...", pageHeight)
     let pageSize = 1056;
     console.log(pageSize)
    if( pageHeight > pageSize){
        self.addPage()
    }
    

}
export default onChange;