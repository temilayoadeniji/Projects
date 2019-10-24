import React, {Component} from 'react'
import Menu from './Menu'
import {Route, Switch} from "react-router-dom"
import Adidas from './Adidas'
import Checkout from './Checkout'
import Nike from './Nike'
import Home from './Home'
import Success from './Success'
import New from './New'
import Account from './Account'

class App extends Component{
  render(){
    return(
      <div>
        <Menu />

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/new' component={New}/>
          <Route path='/adidas' component={Adidas}/>
          <Route path='/Nike' component={Nike}/>
          <Route path='/Checkout' component={Checkout}/>
          <Route path='/Success' component={Success}/>
          <Route path ='/Account' component={Account}/>


        </Switch>
      </div>
    )
  }
}



export default App
