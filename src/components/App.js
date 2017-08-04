import React, { Component } from 'react';
import Navigation from "./navigation.js";
import "./../css/common.css";
import "./../css/fonts.css";
import './../css/calc.css';

class App extends Component {
  render(){
    return (
<div className="Container clearfix">
	<div className=" container clearfix">
		<Navigation/>
  </div>
				</div>
     	
    )
  }
}

export default App;