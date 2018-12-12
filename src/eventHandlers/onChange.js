


const onChange = (e,self) => {

    let pageHeight = document.activeElement.offsetHeight;
     
    if( pageHeight >= 1000){
        self.addPage()
    }
    

}
export default onChange;