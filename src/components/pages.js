import React from "react"
import Menu from './menu'
import Page from './page';
import sanitizeHtml from 'sanitize-html'
import { replaceCaret } from "../helpers";
import { findLastTextNode } from '../helpers'

class Pages extends React.Component {

    constructor(props) {
        super(props)
        let page = this.getNewPage(0, true)
        this.state = { pages: [page] }
        this.addPage = this.addPage.bind(this)
        this.removePage = this.removePage.bind(this)
        this.goBackApage = this.goBackApage.bind(this)
        this.goToNextPage = this.goToNextPage.bind(this);
        this.goToPreviousPage = this.goToPreviousPage.bind(this);
        this.getNewPage = this.getNewPage.bind(this)

    }

    getNewPage = (id, focus ) =>
        <Page id={id}
            goToNextPage={this.goToNextPage}
            goToPreviousPage={this.goToPreviousPage}
            focus={focus}
            key={id} />

    goToNextPage = (args) => {
        let nextId = (Number(args.id) + 1).toString()
        if (!document.getElementById(nextId)) {
            this.addPage({ id: nextId, content: args.content, focus: args.focus })
        }else{
            let page = document.getElementById(nextId)
            if (page && page.firstChild) {
                page.prepend(args.content) 
                    setTimeout(() => {
                        if(args.focus ){
                            page.focus();
                        }
                    }, 0); 
                    
            } else {
                let div = document.createElement('div')
                page.append(div)
                div.append(args.content)
            } 
        }
    }

    goToPreviousPage = (id) => {
        let thisId = id
        if(thisId === "0") return; 
      
        let prevId = (Number(thisId) - 1).toString();
        console.log(prevId, " prevId")
        
        
        let prevElement = document.getElementById(prevId)
        console.log(prevElement)
         
          if(prevElement && prevElement.lastChild){
            setTimeout(() => {
              prevElement.focus() 
              replaceCaret(prevElement)
              if(this.element.childNodes.size === 0 ){
                    this.removePage(prevId)
              }
              
            }, 0);
             
            console.log(prevElement.lastChild, " focusiing...")
      
            }
      }
    // goToPreviousPage = (args) => {
    //     let thisId = args.id
    //     let prevId = (Number(thisId) - 1).toString();
    //     if(prevId === "0"){
    //         return; 
    //     }
    //     let thisElement = document.getElementById(thisId)
    //     let prevElement = document.getElementById(prevId)
         
    //     if(args.focus){
    //         if(prevElement && prevElement.lastChild){
    //             prevElement.lastChild.focus()
    //         }
                   
    //     }
    //     let content = args.content
    //     if(content.length > 0){

    //     }
        
    // }

    render() {
        return (
            <div>
                <Menu />
                <div className="pages" ref={el => this.element = el}>

                    {this.state.pages.map((p, i) => { return p })}

                </div>
            </div>
        )
    }


    addPage = (args) => {

        let page = this.getNewPage(args.id, args.focus)
        let pages = [...this.state.pages, page]
        this.setState({ pages: pages })
        this.forceUpdate();
        let newPage; 
        setTimeout(() => {
            newPage = document.getElementById(args.id)
            //console.log(newPage, page)
            //console.log(newPage, page)
            if (newPage && newPage.firstChild) {
                //console.log("if.xxxxxxx.", newPage)
                newPage.prepend(args.content) //, newPage.firstChild)
                //console.log("if..111", newPage)
            } else if (newPage) {
                //console.log("esel ..", newPage)
                let div = document.createElement('div')
                newPage.append(div)
                div.append(args.content)
                //console.log("else1111", newPage)
            }else {
                //console.log(">>>>>>>>>>")
            }

        }, 0);



    }


    removePage = (thisId) => {

        if (thisId === "0") return;

        let pages = this.state.pages.filter((page) =>
            page.props.id !== thisId)
        this.setState({ pages: pages })
        this.forceUpdate()

        // let prevEl = document.getElementById(prevId)
        // prevEl.focus()
        // replaceCaret(prevEl)

    }

    goBackApage = (prevId) => {
        let prevEl = document.getElementById(prevId)
        // you need to set focus here before replacing carot
        prevEl.focus()
        replaceCaret(prevEl)

    }

    componentDidMount = () => {
        this.element.addEventListener("input", this.handleChange)
    }

}



export default Pages;
