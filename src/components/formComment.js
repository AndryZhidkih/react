import React, { Component } from 'react';
class ComementShow extends Component{
    render(){
        return(
            <div className="show-comment">
               <div className="show-comments">Имя:{this.props.name}</div>
               <div className="show-comments">Фамилия:{this.props.sureName}</div>
               <div className="show-comments">Коментарий:{this.props.comment}</div>
            </div>
            )
    }
}
class Comments extends Component{
    constructor(props){
        super(props)
        this.state={
            Comment:[
            {
                id:1,
                name:"Андрей",
                sureName:"Жидких",
                comment:"Отлично"
                }
            ]
        }
    }
    ClickSubmit(event){
        console.log(this.nameInput.value)
        event.preventDefault()
        const id=Date.now()
        const name=this.nameInput.value;
        const sureName=this.surNameInput.value;
        const comment=this.textAreaInput.value;
        this.setState({
            Comment:this.state.Comment.concat({name,sureName,comment,id})
        })
        this.nameInput.value=""
        this.surNameInput.value=""
        this.textAreaInput.value=""

    }   
 render(){
 	return(
 		
 			<div className="comment-container">
 				<div className="comment-content"></div>
 				<form onSubmit={this.ClickSubmit.bind(this)}className="comment-form">
 						<div className="comment-form-item">
 						<label className="comment-form-label" htmlFor="name">
 							Имя
 						</label>
 						<input type="text" required className="comment-input" placeholder="Ваше Имя" ref={(input) => { this.nameInput = input; }}/>
 						</div>
    				<div className="comment-form-item">
    				<label className="comment-form-label" htmlFor="email">
    					Фамилия
    				</label>
    				<input type="text" required className="comment-input" placeholder="Ваша Фамилия" ref={(input) => { this.surNameInput = input; }}/>
    				</div>
    				<div className="comment-form-item comment-form-item-textarea">
    				<label className="comment-form-label-textarea"> Сообщение</label>
    				<textarea className="comment-textarea" placeholder="Оставте комментарий" ref={(input) => { this.textAreaInput = input; }}/>
    				</div>
    				<div className="comment-form-button-item">
    				<button type="submite" className="comment-form-button">Отправить</button>
    				</div>
 				</form>
                <div>
                    <ul>
                        {
                            this.state.Comment.map(el=>(
                            <ComementShow key={el.id} name={el.name} sureName={el.sureName} comment={el.comment}/> 
                            ))
                        }
                    </ul>
                </div>
 			</div>
 		)
 }
}

export default Comments