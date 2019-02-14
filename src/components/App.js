import React from 'react'
import Menu from './menu'
import Pages from './pages'
import '../fontawsome/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Title from './title'
import TextMenu from './textMenu'
import {abeshaToggle} from '../GLOBAL'


class App extends React.Component{

  constructor(props){
        super(props)
        this.state = {
             abeshaMenu: true,
            //  abeshaBody: true
        }
        this.handleMenuToggle = this.handleMenuToggle.bind(this)
        // this.handleBodyToggle = this.handleBodyToggle.bind(this)
  }

  handleMenuToggle(){
    this.setState ({abeshaMenu: !this.state.abeshaMenu})
    console.log("....toggleiing menu", this.state.abeshaMenu)
  }
  handleBodyToggle(){
    // this.setState ({abeshaBody: !this.state.abeshaBody})
    abeshaToggle.setCurrent()
    // console.log("....toggleiing body", this.state.abeshaBody)
  }

  render = () => (
    <div >
      <nav className="sticky-top">
        <Title />
        <TextMenu onMenuToggle={this.handleMenuToggle} abeshaMenu={this.state.abeshaMenu}/>
        <Menu onBodyToggle={this.handleBodyToggle} onMenuToggle={this.handleMenuToggle} abeshaMenu={this.state.abeshaMenu} />
      </nav>
  
      <Pages abeshaBody={this.state.abeshaBody}/>
      
    </div>
  )

}

export default App

// const Separator = () => (
//   <hr height="10px" border="none"></hr>
// )