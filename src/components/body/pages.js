import React from "react"
import Page from './page';
import { replaceCaret } from "../../helpers";


class Pages extends React.Component {

    constructor(props) {
        super(props)
        let page = this.getNewPage(0, true)
        this.state = { pages: [page] }
        this.addNextPage = this.addNextPage.bind(this)
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

    
    // addPage = (args) => {
    //     let page = this.getNewPage(args.id, args.focus)
    //     let pages = [...this.state.pages, page]
    //     this.setState({ pages: pages })
    //     this.forceUpdate();
    //     let newPage; 
    //     setTimeout(() => {
    //         newPage = document.getElementById(args.id)
    //         newPage.prepend(args.content)
    //     }, 0);
    // }


    goToNextPage = (args) => {
        let nextId = (Number(args.id) + 1).toString()
        if (document.getElementById(nextId)) {
            let page = document.getElementById(nextId)
            if (page) {
                    // setTimeout(() => {
                        page.prepend(args.content) 
                        if(args.focus ) page.focus();
                    // }, 0); 
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
              let thisElement = document.getElementById(thisId)
              let removable = thisElement.childNodes.length === 0 ||
                              (thisElement.childNodes.length === 1 &&
                              thisElement.firstChild.tagName === "BR")
             console.log(removable, thisElement.childNodes)
              if(removable){
                    this.removePage(thisId)
              }
            }, 0); 
            console.log(prevElement.lastChild, " focusiing...")
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
