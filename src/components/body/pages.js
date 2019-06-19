import React from "react"
import Page from './page';
import { replaceCaret } from "../../helpers";

// manages adding removing pages
class Pages extends React.Component {

    constructor(props) {
        super(props)
        let page = this.getNewPage(0, true)
        this.state = { pages: [page] }
        this.addNextPage = this.addNextPage.bind(this)
        this.removePage = this.removePage.bind(this)
        this.goToNextPage = this.goToNextPage.bind(this);
        this.goToPreviousPage = this.goToPreviousPage.bind(this);
        this.getNewPage = this.getNewPage.bind(this)
        
    }

    getNewPage = (id, focus ) =>
        <Page id={id}
            goToNextPage={this.goToNextPage}
            goToPreviousPage={this.goToPreviousPage}
            addNextPage={this.addNextPage}
            removePage={this.removePage}
            focus={focus}
            key={id}
             />
    
    //addes new next page when carot reaches a certain distance down a page
    //if that page does exist
    addNextPage = (thisId) => {
        let nextId = (Number(thisId) + 1).toString();
        if(document.getElementById(nextId)) return;
        let page = this.getNewPage(nextId, false)
        let pages = [...this.state.pages, page]
        this.setState({ pages: pages })
        
    }

    goToNextPage = (args) => {
        let nextId = (Number(args.id) + 1).toString()
        if (document.getElementById(nextId)) {
            let page = document.getElementById(nextId)
            console.log(page)
            let divs = page.children
            if (page) {
                page.prepend(args.content) 
                if(args.focus) {
                    replaceCaret(page)                
                }else {
                    page.focus()
                }
            }
        }
    }

    goToPreviousPage = (id) => {
        let thisId = id
        if(thisId === "0") return; 
        let prevId = (Number(thisId) - 1).toString();
        let prevElement = document.getElementById(prevId)
          if(prevElement){
              replaceCaret(prevElement)
              let thisElement = document.getElementById(thisId)
              if(thisElement.childNodes.length === 0  ){
                    this.removePage(thisId)
              }
            }
      }
    

    render() {
        return (
            <div>
                <div className="pages" ref={el => this.element = el}>
                    {this.state.pages.map((p, i) => { return p })}
                </div>
            </div>
        )
    }


    removePage = (thisId) => {
        if (thisId === "0") return;
        let pages = this.state.pages.filter((page) =>
            page.props.id !== thisId)
        this.setState({ pages: pages })
        this.forceUpdate()
        console.log(".... ", thisId, " removed")
    }

    componentDidMount = () => {
        this.element.addEventListener("input", this.handleChange)
    }

}

export default Pages;
