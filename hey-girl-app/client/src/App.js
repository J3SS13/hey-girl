import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { getIndustries } from './components/services/industries';
import { getPosts, addPost, updatePost, deletePost } from './components/services/posts';
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
      topic : 'We need more women in leadership!',
  		user_name : "Ashley"
    }
  // await addPost(industryId, data);

  // await deletePost(industryId, postId);

  // await updatePost(industryId, postId, data);
  }



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
