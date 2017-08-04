import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
class Works extends Component{
 render(){
 	return(
 		<div className="work-wrapp clearfix">
 		<ul className="work-ul clearfix" >
 			<li className="work-li"><Link to="/сomments" className="work-link-comments work-link" >Форма комментариев</Link></li>
 			<li className="work-li"><Link to="/note" className="work-link-note work-link" >Создание заметок</Link></li>
 			<li className="work-li"><Link to="/calcul" className="work-link-calcul work-link">Калькулятор</Link></li>
 			<li className="work-li"><Link to="/findText" className="work-link-findText work-link">Строка поиска</Link></li>
 			</ul>
 		</div>
 		)
 }
}

export default Works