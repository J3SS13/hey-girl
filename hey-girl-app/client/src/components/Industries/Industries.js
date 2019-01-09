import React, { Component } from 'react';
import Engineering from './Engineering/Engineering';
import Entertainment from './Entertainment/Entertainment';
import Science from './Science/Science';
import Tech from './Tech/Tech';



class Industries extends Component{
  constructor(props){
      super(props);
    }
    render(){
      return(
         <div>
          <Science />
          <Tech />
          <Entertainment />
          <Engineering />
         </div>

      )
}
}

export default Industries;
