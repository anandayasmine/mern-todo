import React, { Component } from 'react';
import style from './style.sass'

export default class Button extends Component {
	constructor(props){
		super(props);
		this.state={
			title: props.title,
			status: props.status,
			alertMessage: props.alertMessage,
			onclick: props.onclick,
		}
	}
	render() {
		return (
			<div className={style.fancyButton}>
				<button onClick={this.state.onclick}>
					<span className={style.label}>{this.state.title}</span>
					<span className={'fa fa-circle-o-notch fa-spin'+style.spinner+' '+style.hide}></span>
				</button>

				{
					this.state.status == "alert" &&
					<div className={'invalidLogin'+' '+style.alert}>
						<span className={style.message}>
							{this.state.alertMessage}
						</span>
					</div>
				}
			</div>
		);
	}
}