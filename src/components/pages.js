import React from "react"
import ReactDOM from 'react-dom'
import Menu from './menu'
import Paragraph from './paragraph'
import onChange from '../eventHandlers/onChange'
import onKeyDown from '../eventHandlers/onKeyDown'
import onKeyPress from '../eventHandlers/onKeyPress'
import { element, node } from "prop-types"
import uniqid from 'uniqid'

import sanitizeHtml from 'sanitize-html'



class  Page extends React.Component {

    constructor(props){
        super(props)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }
    
       handleKeyPress = (e) => onKeyPress(e,this)
   

    componentDidMount(){
        this.element.focus()
        this.element.id = this.props.id
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
          this.removePage = this.removePage.bind(this)
          this.handleChange = this.handleChange.bind(this)
          this.handleKeyDown = this.handleKeyDown.bind(this)

        
       }

       componentDidMount(){
         
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

        removePage = (e ) => {

            let pageId = e.target.id
        
            let previous = -1; 
            let next = 1; 
        
            let  pages = this.state.pages.filter( (page,i) => 
                                                { previous = i - 1 ;
                                                  next = i + 1;
                                                 return page.props.id !== pageId
                                                })
                            
            console.log(pages, " beofre..")

            let prevPage = pages[previous]
            let nextPage = pages[next] ? pages[next] : null;  
            
            console.log(prevPage)
            if(!prevPage) return; 

            if(e.target.id === "0" ){
                return; 
            }
            console.log(" why is this not setting...",)
            this.setState({pages: pages})
            this.forceUpdate()

            //console.log(this.state.pages.length, " after ..")

            let pid = prevPage.props.id
            let prevEl = document.getElementById(pid)
            let node = prevEl.childNodes[0]
            
             // you need to set focus here before replacing carot
             node.focus()
             replaceCaret(node)

             console.log( ".....replaced cart")
            
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


const findLastTextNode =  (node) => {
    if (node.nodeType === Node.TEXT_NODE) return node;
    let children = node.childNodes;
    for (let i = children.length-1; i>=0; i--) {
      let textNode = findLastTextNode(children[i]);
      if (textNode !== null) return textNode;
    }
    return null;
  }

  const replaceCaret = (el /*:HTMLElement*/)  => {
    
    // Place the caret at the end of the element
    const target = findLastTextNode(el);
    
    // do not move caret if element was not focused
    const isTargetFocused = document.activeElement === target;
    
    if (target/*&& target.nodeValue !== null && isTargetFocused */) {
      let range = document.createRange();
      let sel = window.getSelection();
      

      //let html = target.innerHTML
      

      //TODO: figur out how to find the right legth of innnerHTML to replace 0 in setStart(targe, 0)
       //while(html.length && html.childNodes){
        //console.log(html)
        range.setStart(target, 1); 
      //}
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
      if (el instanceof HTMLElement) el.focus();
    }
  }
  


  


export default Pages;
