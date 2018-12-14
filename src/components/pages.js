import React from "react"
import ReactDOM from 'react-dom'
import Menu from './menu'
import Paragraph from './paragraph'
import onChange from '../eventHandlers/onChange'
import onKeyDown from '../eventHandlers/onKeyDown'
import onKeyPress from '../eventHandlers/onKeyPress'
import { element } from "prop-types"
import uniqid from 'uniqid'





class  Page extends React.Component {

    constructor(props){
        super(props)
        //this.handleChange = this.handleChange.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handleOverFlow = this.handleOverFlow.bind(this)
        
    }
      // handleChange = (e) => onChange(e,this)
       handleKeyPress = (e) => onKeyPress(e,this)
       handleOverFlow = (e) => {
           console.log("..over flowing ....")
           console.log(e)
       }

    componentDidMount(){
        this.element.focus()
        this.element.id = this.props.id
        this.element.addEventListener("overflow", this.handleOverFlow)

    }
    
   
    render(){
        return(
        <div className="page"   ref={ el => this.element = el}  >
            <Paragraph id={this.props.id}   onKeyDown={this.props.onKeyDown} onKeyPress={this.handleKeyPress}/>
        </div>
        )
    }
}




class Pages extends React.Component {
       
       constructor(props){
          super(props)
         
          this.state = {  pages: [<Page id={0}  onKeyDown={this.handleKeyDown} onKeyPress={onKeyPress} key={0}  />]}
          this.addPage = this.addPage.bind(this)
          this.handleChange = this.handleChange.bind(this)
          this.handleKeyDown = this.handleKeyDown.bind(this)

        
       }
      
       handleKeyDown = (e) => onKeyDown(e,this)
       handleChange = (e) => onChange(e,this)
       
        addPage =  () => {
            let id = uniqid()
            let page = <Page  id={id} onKeyDown={this.handleKeyDown} onKeyPress={onKeyPress}  key={id} />
            let pages = [...this.state.pages, page]
            this.setState({  pages: pages })
            this.forceUpdate();
            console.log(document.activeElement);
 
            
        }

        removePage(e){
            let pageId = e.target.id
            console.log( " trying to remove")
            let previous = -1; 
            let pages = this.state.pages.filter( (page,i) => { previous = i - 1 ;return(page.props.id !== pageId )})
            let prevPage = pages[previous]
            
            

            console.log(pages)
            this.setState({pages: pages})
            this.forceUpdate()
            let pid = pages[previous].props.id
            console.log("...focus back. id.", pid)
            let prevEl = document.getElementById(pid)
            let len = prevEl.innerHTML.length
            setCaretPosition(prevEl, 1000)
            //console.log(">> p elemnt ", p.element);
            //prevPage.element.focus();

            
        }

    componentDidMount(){
        this.element.addEventListener("input", this.handleChange)
    }

    

    render() {
         return(
             <div>
               <Menu/>
               <div className="pages" ref={ el => this.element = el }>
                  
                  {this.state.pages.map( (p,i) => { return p})}
                
                </div>
             </div>
         )
    }
}


// based on ; https://codepen.io/chrisshaw/pen/yNOVaz
function setCaretPosition(ctrl, pos) {
    console.log(" carot postions ", ctrl, pos)
    // Modern browsers
    if (ctrl.setSelectionRange) {
      ctrl.focus();
      ctrl.setSelectionRange(pos, pos);
    
    // IE8 and below
    } else if (ctrl.createTextRange) {
      var range = ctrl.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }


export default Pages;
