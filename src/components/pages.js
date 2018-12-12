import React from "react";
import Menu from './menu'
import Paragraph from './paragraph'
import onChange from '../eventHandlers/onChange'
import onKeyDown from '../eventHandlers/onKeyDown'
import onKeyPress from '../eventHandlers/onKeyPress'
import { element } from "prop-types";
import uniqid from 'uniqid'





class  Page extends React.Component {

    constructor(props){
        super(props)
        //this.handleChange = this.handleChange.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }
      // handleChange = (e) => onChange(e,this)
       handleKeyPress = (e) => onKeyPress(e,this)
       
    componentDidMount(){
        this.element.focus()
        this.element.id = this.props.id
        console.log("this pages id is  " , this.element.id)
        console.log("this page's height is ", this.element.offsetHeight, this.element.clientHeight)
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
         
          this.state = {  pages: [<Page id={0}  onKeyDown={this.handleKeyDown} onKeyPress={onKeyPress}  />]}
          this.addPage = this.addPage.bind(this)
          this.handleChange = this.handleChange.bind(this)
          this.handleKeyDown = this.handleKeyDown.bind(this)
        
       }
      
       handleKeyDown = (e) => onKeyDown(e,this)
       handleChange = (e) => onChange(e,this)
       
        addPage =  () => {
        
            let page = <Page  id={uniqid()} onKeyDown={this.handleKeyDown} onKeyPress={onKeyPress}  />
            let pages = [...this.state.pages, page]
            this.setState({  pages: pages })
            this.forceUpdate();
            
        }

        removePage(pageId){
            console.log( " trying to remove")
            let previous = null; 
            let pages = this.state.pages.filter( (page,i) => { previous = i - 1 ;return(page.props.id !== pageId )})
            
            console.log(pages)
            this.setState({pages: pages})
            this.forceUpdate()
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


export default Pages;
