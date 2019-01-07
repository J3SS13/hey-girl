import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { getIndustries } from './components/services/industries';
import { getPosts, addPost } from './components/services/posts';
import Engineering from './components/Industries/Engineering/Engineering';
import Entertainment from './components/Industries/Entertainment/Entertainment';
import Science from './components/Industries/Science/Science';
import Tech from './components/Industries/Tech/Tech';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';

class App extends Component {

  constructor(props){
      super(props);
    this.state = {
      industries: [],
      posts: []
    }
  }

async componentDidMount(){
  const industries = await getIndustries();
  this.setState({industries});

  const posts = await getPosts(4);

  const data = {
      topic : 'The only way to network with my male coworkers is to attend happy hours in an unsafe part of town.',
  		user_name : "heather1"
    }

  await addPost(4, data);

  }



// async setPosts(industryId){
//   const posts = await getPosts(industryId);
//   this.setState({posts});
// }

// setIndustries(){
//
// }


  render() {
    return (
    <Router>
      <div className="App">
        <Nav setView={this.setView}/>
          <Route exact path="/" component={Home} />
          <Route path="/eng" component={Engineering}/>
          <Route path="/science" component={Science} />
          <Route path="/tech" component={Tech} />
          <Route path="/ent" component={Entertainment} />
      </div>
    </Router>
    );
  }
}

export default App;
