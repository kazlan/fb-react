import React, { Component } from 'react'
import { connect } from 'react-redux'
import { displayMessage } from './actions'
import logo from './logo.svg'
import './App.css'

class App extends Component {

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(displayMessage("All your Reducers are belong to us..."))
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.props.message}
        </p>
      </div>
    );
  }
}

export default connect(state=>state)(App)
