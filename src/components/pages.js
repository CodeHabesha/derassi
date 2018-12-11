import React from "react";
import Menu from './menu'
import Paragraph from './paragraph'
import onChange from '../eventHandlers/onChange'
import onKeyDown from '../eventHandlers/onKeyDown'
import onKeyPress from '../eventHandlers/onKeyPress'
import { element } from "prop-types";






class  Page extends React.Component {

    constructor(props){
        super(props)

        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
        
        
    }

       handleKeyDown = (e) => onKeyDown(e)
       handleChange = (e) => onChange(e,this)
       handleKeyPress = (e) => onKeyPress(e)
       

   
    render(){
        return(

         <div className="page"  >
            <Paragraph onChange={this.handleChange} onKeyDown={this.handleKeyDown} onKeyPress={this.handleKeyPress}/>
        </div>

        )
    }

}




class Pages extends React.Component {
       
       constructor(props){
          super(props)
         
          this.state = {  pages: [<Page onAddPage={this.addPage} onKeyDown={onKeyDown} onKeyPress={onKeyPress} onChange={onChange} />]}
          this.addPage = this.addPage.bind(this)
       }
      
    
        addPage =  () => {
            console.log("...trying to add page....")
            console.log(this.state.pages)
            console.log(this.state.pages.length)
            let p = <Page  onAddPage={this.onAddPage} onKeyDown={onKeyDown} onKeyPress={onKeyPress} onChange={onChange} />
            let newP = this.state.pages.push(p)
            this.setState = {  pages: newP}
            
            this.forceUpdate();
        }



    render() {
         return(
             <div>
               <Menu/>
               <div className="pages" >
                {this.state.pages.map( p => p)}
                </div>
             </div>
         )
    }
}


export default Pages;
