import React, { Component } from 'react';
import style from './style.sass'

export default class Input extends Component {
	constructor(props){
		super(props);
		this.state={
			placeholder: props.placeholder,
			type: props.type,
			icon: props.icon,
		}
	    this.handleChange = this.handleChange.bind(this)
	    this.handleKeyDown = this.handleKeyDown.bind(this)

	}
	handleChange(event){
		const id = this.state.placeholder.toLowerCase()
		const text = event.target.value;
	    this.props.onchange(id,text);
	}
	handleKeyDown(event){
	    if (event.key === 'Enter') {
	    	const content = event.target.value;
	    	this.props.onkeydown(content)
	    	event.target.value=null
	    }
    }
	render() {
		return (
			<div className={style.fancyInput}>
				<input 
					placeholder={this.state.placeholder}
					type={this.state.type}
					onChange={this.handleChange}
					onKeyDown={this.handleKeyDown} 
					>
				</input>
				<span className={'material-icons'}>
					{this.state.icon}
				</span>
			</div>
		);
	}
}