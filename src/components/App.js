import React from 'react'
import Menu from './menu'
import Pages from './pages'
import '../fontawsome/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Title from './title'
import TextMenu from './textMenu'


class App extends React.Component{

  constructor(props){
        super(props)
        this.state = {
             abeshaMenu: true,
             abeshaBody: true
        }
        this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(){
    this.setState ({abeshaMenu: !this.state.abeshaMenu})
    console.log("....toggleiing", this.state.abeshaMenu)
  }

  render = () => (
    <div >
      <nav className="sticky-top">
        <Title />
        <TextMenu onMenuToggle={this.handleToggle} abeshaMenu={this.state.abeshaMenu}/>
        <Menu onMenuToggle={this.handleToggle} abeshaMenu={this.state.abeshaMenu} />
      </nav>
  
      <Pages abeshaBody={this.state.abeshaBody}/>
      
    </div>
  )

}

export default App

// const Separator = () => (
//   <hr height="10px" border="none"></hr>
// )