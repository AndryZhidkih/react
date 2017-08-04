import React, { Component } from 'react';
class Calculator  extends Component{
	constructor(props){
		super(props);
		this.state={
			value:null,
			displayValue:"0",
			operation:false,
			operator:null
		}
	}
	DigitButton(digit){
		const {displayValue,operation}=this.state
		if(operation){
			this.setState({
				displayValue:String(digit),
				operation:false
			})
		}
		else{
		this.setState({
			displayValue:displayValue==="0"?String(digit):displayValue+digit
		})
	}
}
		DotButton(){
			const {displayValue,operation}=this.state
			if(operation){
				this.setState({
					displayValue:".",
					operation:false
				})
			}
			else if(displayValue.indexOf(".")===-1){
				this.setState({
					displayValue:displayValue+".",
					operation:false
				})
			}
		}
		FuncClear(){
			this.setState({
				displayValue:"0"
			})
		}
		PlusOrMinusBut(){
			const{displayValue}=this.state
			this.setState({
				displayValue:displayValue.charAt(0)==="-" ? displayValue.substr(1):"-" + displayValue
			})
		}
		FuncPercent(){
			const{displayValue}=this.state
			const value=parseFloat(displayValue)
			this.setState({
				displayValue:String(value/100)
			})
		}
		calcOperation(nextOperator){
			const{displayValue, operator, value}=this.state
				const nextValue=parseFloat(displayValue)
			const operations={
				"/":(prevValue,nextValue)=>prevValue/nextValue,
				"*":(prevValue,nextValue)=>prevValue*nextValue,
				"+":(prevValue,nextValue)=>prevValue+nextValue,
				"-":(prevValue,nextValue)=>prevValue-nextValue,
				"=":(prevValue,nextValue)=>nextValue
			}
			if(value==null){
				this.setState({
					value:nextValue
				})
			} else if(operator){
				const currentValue=value||0
				const resultValue=operations[operator](currentValue,nextValue)
				this.setState({
					value:resultValue,
					displayValue:String(resultValue)
				})
			}
		
			this.setState({
				operation:true,
				operator:nextOperator
			})
		}
	render(){
		const {displayValue}=this.state
		return(
			<div className="calc">
			<div className="calc-display">
				<div>
					{displayValue}
				</div>
			</div>
				<div className="calc-func-button">
				<button className="calc-func-button-c" onClick={()=>this.FuncClear()}>с</button>
				<button className="calc-Func-button-c" onClick={()=>this.PlusOrMinusBut()}>±</button>
				<button className="calc-func-button-c" onClick={()=>this.FuncPercent()}>%</button>
			</div>
			<div className="calc-digit-button">
				<button className="digit-button" onClick={()=>this.DigitButton(7)}>7</button>
				<button className="digit-button" onClick={()=>this.DigitButton(8)}>8</button>
				<button className="digit-button" onClick={()=>this.DigitButton(9)}>9</button>
				<button className="digit-button" onClick={()=>this.DigitButton(4)}>4</button>
				<button className="digit-button" onClick={()=>this.DigitButton(5)}>5</button>
				<button className="digit-button" onClick={()=>this.DigitButton(6)}>6</button>
				<button className="digit-button" onClick={()=>this.DigitButton(1)}>1</button>
				<button className="digit-button" onClick={()=>this.DigitButton(2)}>2</button>
				<button className="digit-button" onClick={()=>this.DigitButton(3)}>3</button>
				<button className="digit-button" onClick={()=>this.DotButton()}>.</button>
				<button className="digit-button" onClick={()=>this.DigitButton(0)}>0</button>
				<button className="button-equally" onClick={()=>this.calcOperation("=")}>=</button>
			</div>
			<div className="calc-operation-button">
			<button className="operation-button-plus" onClick={()=>this.calcOperation("/")}>÷</button>
			<button className="operation-button-minus" onClick={()=>this.calcOperation("*")}>*</button>
			<button className="operation-button-multiply" onClick={()=>this.calcOperation("+")}>+</button>
			<button className="operation-button-divide" onClick={()=>this.calcOperation("-")}>-</button>
			</div>
			</div>
			)
	}
}
export default Calculator 