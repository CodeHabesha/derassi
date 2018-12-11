

var memo = []
const onChange = (e,self) => {
    let divider = 1000
    let height = parseInt(e.target.offsetHeight/divider)
    
    console.log(height)
    if( height > 0 &&  !memo.includes(height) ) {
        
        console.log(memo)
        memo.push(height)
        self.props.onAddPage()

        console.log("....add new page....at ", height)
    }

}
export default onChange;