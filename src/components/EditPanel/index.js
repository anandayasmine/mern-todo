import React, { Component } from 'react';
import style from './style.sass'
import Input from '../Input'

export default class EditPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.value,
		};

	}
	render() {
		return (
			<div className={style.wrapper}>
				<div className={style.floatingPanel}>
					<Input 
						placeholder={this.state.value}
					/>
				</div>
				<div className={style.overlay}></div>
			</div>
		);
	}
}