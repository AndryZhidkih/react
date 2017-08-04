import React, { Component } from 'react';
import Masonry from "react-masonry-component";
import  arrow from "./../image/arrow.jpg";
class Note extends Component{
	render(){
		let style={backgroundColor:this.props.color}
		return(
			<div className="note" style={style}><span className="span-note-delete" onClick={this.props.onDelete}>×</span> {this.props.children}</div>
			)
	}
}

class NoteShow extends Component{
	render(){
		const onNoteDelete=this.props.onNoteDelete
		const {notes}=this.props
		return(
			<div className="note-show">
		<Masonry>
				{
				notes.map(el=>(
					<Note key={el.id} color={el.color} onDelete={onNoteDelete.bind(null,el)}>{el.text}</Note>
				))
				}
		</Masonry>
			</div>
		
			)
	}
}

class NotesApp extends Component{
	constructor(props){
		super(props)
		this.state={
			text:[]
		}
	}
	handleSubmit(event){
		event.preventDefault()
	  let text=this.textEmail.value;
	  let id=Date.now();
	  let color=this.textColor.value;
	  if(text===""){
	  	this.setState({
	 		text:this.state.text
	 })
	  }
	  else{
	  	this.setState({
	 		text:this.state.text.concat({text,id,color})
	 })
	  }
	 this.textEmail.value=""
	 
	}
	componentWillMount(){
		const text=localStorage.text;
		if(text){
			this.setState({
				text:JSON.parse(text)
			})
			
		}
	}
	componentDidUpdate(PrevProps,PrevState){
	if(JSON.stringify(PrevState.text)!== JSON.stringify(this.state.text)){
		localStorage.text=JSON.stringify(this.state.text)
		}
	}
	handleDelete(el){
		const noteId=el.id;
		const newNotes=this.state.text.filter(el=>(
				 el.id !== noteId
		));
		this.setState({
			text:newNotes
		})
	}

	
	render(){
		const {text}=this.state
		return(	
			<div className="note-app">
				<span className="note-app-span">NotesApp</span>
			<form className="note-app-form" onSubmit={this.handleSubmit.bind(this)}>
			<div className="note-app-wrap-area">
				<textarea
				placeholder="Введите текст заметки" 
			  rows={8} 
			  className="note-app-textarea"
			  ref={(input)=>{this.textEmail = input;}}
			  />
			  <button className="note-app-add-button" type="submit">Добавить</button>
			  </div>
			  <span className="note-app-textForInput">  Выбери цвет заметки </span> <span className="note-app-imageSpan"><img  className="arrow"  alt="Стрелочка вниз"src={arrow} width="20px"/></span>
			 	<input type="color"  className="note-app-inputColor"  ref={(input)=>{this.textColor = input;}} />
			
			</form>
			<NoteShow notes={text} onNoteDelete={this.handleDelete.bind(this)}/>
			
			</div>
			)
	}
}


export default NotesApp