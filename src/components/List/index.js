import React, { Component } from 'react';
import style from './style.sass'

export default class List extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	id: props.id,
	  	content: props.content,
	  	isDone: props.isdone,
	  	// key: props.key
	  };
	  this.handleCheckbox = this.handleCheckbox.bind(this)
	  this.handleDeletion = this.handleDeletion.bind(this)

	}
	handleCheckbox(){
		this.setState({
			isDone: !this.state.isDone 
		},()=>this.props.handleChange(this.state))
	}
	handleDeletion(){
		// console.log('id from list:', this.state.id)
		this.props.handleDeletion(this.state.id)
	}
	render() {
		return (
			<li className={style.list+' '+ (!this.state.isDone&&style.active) }>
				<div className={style.listContent}>
					<span 
						className={'material-icons '+style.icon}
						onClick={this.handleCheckbox}
					>
						{
							this.state.isDone ?
							'check_box' : 
							'check_box_outline_blank'
						}
					</span>
					<span className={style.content}>
						{this.state.content}
					</span>
					
				</div>

				<div className={style.actions}>
					<span className={'material-icons'}>mode_edit</span>
					<span 
						className={'material-icons'}
						onClick={this.handleDeletion}
						>close</span>
				</div>
			</li>
		);
	}
}
