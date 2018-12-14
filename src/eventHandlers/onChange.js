


const onChange = (e,self) => {

    let pageHeight = document.activeElement.offsetHeight;

    console.log(pageHeight)
     let pageSize = 1000
    if( pageHeight >= pageSize){
        self.addPage()
    }
    

}
export default onChange;