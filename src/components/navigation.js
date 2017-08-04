import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import Calculator from "./Calcul.js";
import HelloWorld from "./findTest.js";
import Comments from "./formComment.js";
import NotesApp from "./Notes.js";
import Works from "./myWork.js";
class Navigation extends Component{
	render(){
		return(
	<Router>
    <nav className="navigation">
      <ul className="navigation-ul">
   			<li className="navigation-li">
					<a href="https://andry-zhidkikh.000webhostapp.com"  className="navigation-Link">Обо мне</a>
				</li>
				<li className="navigation-li">
					<NavLink to="/" activeClassName="active" className="navigation-Link">Мои работы</NavLink>
				</li>
			</ul>
     <Route exact path="/" component={Works}/>
     <Route path="/calcul" component={Calculator}/>
     <Route path="/findText" component={HelloWorld}/>
     <Route path="/сomments" component={Comments}/>
     <Route path="/note" component={NotesApp}/>      
    </nav>
  </Router>
			)
	}
}
export default Navigation