import React, { Component } from 'react';
import './App.css';
import Engineering from './components/Industries/Engineering/Engineering';
import Entertainment from './components/Industries/Entertainment/Entertainment';
import Medicine from './components/Industries/Medicine/Medicine';
import Science from './components/Industries/Science/Science';
import Tech from './components/Industries/Tech/Tech';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';

class App extends Component {

  constructor(props){
      super(props);
    this.state = {
      view: ''
    }
this.setView = this.setView.bind(this);
  }


setView(view){
  console.log("this got fired")
  this.setState({view:view});
}

getView(){
  switch (this.state.view){
    case 'Engineering':
      return <Engineering />
    case 'Science' :
     return <Science />
    case 'Technology' :
      return  <Tech />
    case 'Entertainment' :
      return <Entertainment />
    case 'Home' :
      return <Home setView={this.setView}/>
    default :
      return  <Home setView={this.setView}/>
  }
}



  render() {
    return (
      <div className="App">
        <Nav setView={this.setView}/>
        {this.getView()}
      </div>
    );
  }
}

export default App;
