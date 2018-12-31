import React from "react"
import Menu from './menu'
import Page from './page';
import sanitizeHtml from 'sanitize-html'
import { replaceCaret } from "../helpers";


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
        console.log(this, "got to next page called..", args)
        let nextId = (Number(args.id) + 1).toString()
        if (!document.getElementById(nextId)) {
            this.addPage({ id: nextId, content: args.content, focus: args.focus })
        }else{
        
            let page = document.getElementById(nextId)
            if (page && page.firstChild) {
                page.insertBefore(args.content, page.firstChild)
            } else {
                let div = document.createElement('div')
                page.append(div)
                div.append(args.content)
            }  
        }
    }

    goToPreviousPage = (args) => {
        console.log(this, "going to prev page..")
        let thisId = args.id
        console.log("this page content....", document.getElementById(thisId))
        let prevId = (Number(thisId) - 1).toString();
        let thisEl = document.getElementById(thisId)
        let empty = sanitizeHtml(thisEl.innerHTML).length === 0
        let dirty = thisEl.innerHTML.replace(/(<br>)/g, '')
        let deletable = (empty || !dirty) && thisEl.id !== "0"
        if (deletable) {
            console.log("...removing page", thisId)
            this.removePage(thisId, prevId)
        } else {
            console.log("..going back a page, ", prevId)
            this.goBackApage(prevId)
        }
    }

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
            console.log(newPage, page)
            console.log(newPage, page)
            if (newPage && newPage.firstChild) {
                console.log("if.xxxxxxx.", newPage)
                newPage.insertBefore(args.content, newPage.firstChild)
                console.log("if..111", newPage)
            } else if (newPage) {
                console.log("esel ..", newPage)
                let div = document.createElement('div')
                newPage.append(div)
                div.append(args.content)
                console.log("else1111", newPage)
            }else {
                console.log(">>>>>>>>>>")
            }

        }, 0);



    }


    removePage = (thisId, prevId) => {

        if (thisId === "0") return;

        let pages = this.state.pages.filter((page) =>
            page.props.id !== thisId)
        this.setState({ pages: pages })
        this.forceUpdate()

        let prevEl = document.getElementById(prevId)
        prevEl.focus()
        replaceCaret(prevEl)

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
