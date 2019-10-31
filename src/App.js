import React, { Component } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Users from './components/Users';

// import { Provider } from 'react-redux'
// import store from './redux'

import { connect } from 'react-redux'
import { type } from 'os';
import {myaction} from './actions/actionhassan'
// import {myaction2} from './actions/actionhassan'

class App extends Component {

  render() {
    console.log(this.props)

    return (
      // <Provider store={store}>
      // <BrowserRouter>
      // <div className="App">
      // <Header />

      // <Switch>
      // <Route path="/about" component={About} />
      // <Route path="/contact" component={Contact} />
      // <Route path="/users" component={Users} />
      // <Route exact path="/" component={Home} />
      // <Route path="/" compo/nent={Home} />
      // </Switch>

      // <Footer />
      // </div>
      // </BrowserRouter>
      // </Provider>
      <div>
        <h1>redux</h1>
        <button onClick={()=>{this.props.changename()}}>ChangeName</button>
        {/* <button onClick={()=>{this.props.changerollno('2209')}}>ChangeName</button> */}

        </div>
    );

  }

}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (Dispatch) => {
 return {
changename:()=>{Dispatch(myaction())},
// changerollno:(rollno)=>{Dispatch(myaction2(rollno))}
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
