import React from 'react'
import { UncontrolledDropdown, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from 'reactstrap'
import keyboardMap from '../../keyboardMap'
import { fontStyle } from '../../GLOBAL'


class FileMenu extends React.Component {


    constructor(props){
        super(props)
        this.state = {
            dropdownOpen: false
        }
        this.toggle = this.toggle.bind(this)
        this.shareFile = this.shareFile.bind(this)
        this.getMeaning = this.getMeaning.bind(this)
    }

    toggle(){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
          });
    }
    shareFile(e){
        console.log(" share file ....", e)
    }

    getMeaning(amArray, eng ){
            let meaning = ""
            for(let k of amArray){
                keyboardMap[k]  ?  (meaning += keyboardMap[k]) : (meaning += " ")
            }
            return(this.props.abeshaMenu ? <Amharic meaing={meaning}/> : eng)
    }


    render =  () => (

        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color="light" >
            {this. getMeaning(['fa', 'ye', 'l'], "File")}
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem onClick={this.shareFile}>{this.getMeaning(['sxaa', 'r'], "Share")}</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>{this.getMeaning(['ua', 'dee', 's'], "New")} </DropdownItem>
            <DropdownItem>{this.getMeaning(['k', 'fe', 't'], "Open") } </DropdownItem>
            <DropdownItem>{this.getMeaning(['ge', 'l', 'b', 'tc'], "Make copy") } </DropdownItem>
            <DropdownItem>{this.getMeaning(['s', 'm', ' ', 'qe', 'y', 'r'], "Rename")} </DropdownItem>
            <DropdownItem>{this.getMeaning(['ua', 's', 'qe', 'm', 't'],   "Save" )} </DropdownItem>
            <DropdownItem>{this.getMeaning(['qe', 'y', 'r', 'na', ' ', 'ua', 's', 'qe', 'm', 'tc'],"Save as")} ...</DropdownItem>
            <DropdownItem><i className="fas fa-folder"></i> {this.getMeaning(['bo', 'ta', ' ', 'qe', 'y', 'r'], "Move")}</DropdownItem>
            <DropdownItem><i className="fas fa-trash-alt"></i>  {this.getMeaning(['tca', 'l'], "Trash")}</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>{this.getMeaning(['pee', 'dee','iaa', 'f',  " ", 's','ra'], "Download as PDF")}</DropdownItem>
            <DropdownItem>{this.getMeaning(['uee', 'maa', 'l'], "Email")}<i className="dropright" ></i>
                    
            </DropdownItem>
            <DropdownItem>{this.getMeaning(['waa', 'b', ' ', 'la','y', ' ', 'tca', 'l'], "Publish to web")} </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>{this.getMeaning(['y', 'h', ' ', 'do','koo','me','n','t'], "Document detail") }</DropdownItem>
            <DropdownItem divider />
            <DropdownItem><i className="fas fa-print"></i>  {this.getMeaning(['ua','t','m'], "print") }</DropdownItem>
        </DropdownMenu>
         </Dropdown>
       
    )
    
} 
export default FileMenu; 

  
const Amharic = (props) => (
    <span style={{fontFamily: fontStyle.menuFontStyle}}> {props.meaing} </span>
)