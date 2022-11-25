import React, { Component } from 'react';
import style from './style.sass'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import {Link} from "react-router-dom";
import {getUsers,addUser} from 'src/service/User'

export default class Signup extends Component {
	constructor(props){
		super(props);
		this.state={
			name: null,
			email: null,
			password: null,
		}
	    this.doAddUser = this.doAddUser.bind(this)
	    this.setValue = this.setValue.bind(this)

	}
	async doAddUser(){
	    try{
		    const jRespon = await addUser(this.state)
			    .then(respon=>{
					    console.log('respon : ', respon)
					    let respon_msg
				    	((typeof respon.err === "undefined") ? 
					    	respon_msg = 'Account Sucessfully Added' 
					    	:
					    	respon_msg = respon.err )
				    	return respon_msg
				    }
			    )
	    }catch(err){
	    	// console.log('err : ', err)
	    }

	}
	setValue(id,value){
		const stateObj={}
		stateObj[id]=value
		this.setState(stateObj);
		// console.log('this.state : ', this.state)
	}
	render() {
		return (
			<div className={style.area}>
				<div className={style.panel}>
					<h2>Sign Up</h2>
					<div className={style.wrapInput}>
						<Input 
							placeholder="Name"
							type="text"
							icon="person"
							onchange={this.setValue}
						/>
						<Input 
							placeholder="Email"
							type="text"
							icon="email"
							onchange={this.setValue}
						/>
						<Input 
							placeholder="Password"
							type="password"
							icon="lock"
							onchange={this.setValue}
						/>
					</div>
					<Button
						title="Sign Up"
						status="default"
						alertMessage="The Alert Message"
						onclick={this.doAddUser}
					/>
					<span className={style.regLabel}>
						Already have your account?
						<span>
							<Link to="/">Sign In Here</Link>
						</span>
					</span>
				</div>
			</div>
		);
	}
}
