import React, { Component } from 'react';
import style from './style.sass'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import Signup from '../Signup'
import {Link} from "react-router-dom";
import {APP_NAME} from 'src/config'
import {withRouter} from 'react-router-dom';
import {loginUser} from 'src/service/User'

class Login extends Component {
	constructor(props){
		super(props)
		this.state = { 
	    	email: '',
	    	password: ''
	    };
	    this.doLogin = this.doLogin.bind(this)
	    this.setValue = this.setValue.bind(this)

	}
	async doLogin(){
		try{
			console.log('click login')
			// console.log('listState',listState)
		    await loginUser(this.state.email, this.state.password)
			    .then(respon=>{
					    console.log('respon : ', respon)

				    	if(typeof respon.err === "undefined") {
					    	console.log('Login Sucessfully')
							this.props.history.push('/main');
					    	// this.setState({
					    	// 	contents: this.state.contents.concat(listState.content)
					    	// })
					    	// state.contents.push(newContent)
					    	// console.log('this.state.contents : ', this.state.contents)
				    	}else{
					    	console.log(respon.err)
				    	}
				    }
			    )
			    console.log('jRespon : ',jRespon)
	    }catch(err){
	    }
	}
	setValue(prop,value){
		const newState={}
		newState[prop]=value
		this.setState(newState)

	}
	render() {

		return (
			<div className={style.area}>
				<div className={style.panel}>
					<h2 >{APP_NAME}</h2>
					<div className={style.wrapInput}>
						<Input 
							placeholder="Email"
							type="text"
							icon="person"
							onchange={this.setValue}
						/>
						<Input 
							placeholder="Password"
							type="password"
							icon="lock"
							onchange={this.setValue}
							onkeydown={this.doLogin}
						/>
					</div>
					<Button
						title="Login"
						status="default"
						alertMessage="The Alert Message"
						onclick={this.doLogin}
					/>

						<span className={style.regLabel}>
							Sign Up 
							<span>
								<Link to="/signup">Here</Link>
							</span>
						</span>

				</div>
			</div>
		);
	}
}

export default withRouter(Login);