import React, { Component } from 'react';
import TextForSearch from "./text.js";
class HelloShow extends Component{
	render(){
		return(
			<div className="show-seach-text">
			<li className="show-seach-text-li">Имя:{this.props.name}</li>
			<li className="show-seach-text-li">Номер:{this.props.phoneNumber}</li>
			</div>
			)
	}
}
class  HelloWorld extends Component{
	constructor(props){
		super(props);
		this.state={
			text:TextForSearch
		}
	}
handleChange(event){
	let findChange=event.target.value.toLowerCase();
	let text=TextForSearch.filter((el)=>{
		return el.name.toLowerCase().indexOf(findChange)!==-1
	})
		this.setState({text:text})
}
	render(){
		let findText=this.state.text
		return(
				<div className="show-seach-container">
				<div className="show-seach-header"><h2 className="show-seach-header-h2">Строка Поиска</h2></div>
				<input className="show-seach-input comment-input"type="text" onChange={this.handleChange.bind(this)} placeholder="Введите имя для поиска"/>
				<ul>
				{
				findText.map(el=>
						<HelloShow key={el.id} name={el.name} phoneNumber={el.number} />
						)
				}
				</ul>
				</div>
			)
	}
}
export default HelloWorld