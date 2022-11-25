import React, { Component } from 'react';
import style from './style.sass'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import List from 'src/components/List'
import EditPanel from 'src/components/EditPanel'
import {APP_NAME} from 'src/config'
import {getLists, addList, updateList, deleteList} from 'src/service/List'

export default class MainScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			placeholder: "Write your next activites here...",
			contents: []
		};
		this.doSubmit = this.doSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleDeletion = this.handleDeletion.bind(this)

	}
	async componentDidMount(){
		try{
		    const jRespon = await getLists()
			    .then(respon=>{
					    this.setState({
							contents: respon
						});
					    console.log('contents : ', this.state.contents)
				    }
			    )
	    }catch(err){
	    }
	}
	async doSubmit(content){
	    try{
	    	const newContent = {
	    		content: content,
	    		isDone: false
	    	}
		    await addList(newContent)
			    .then(respon=>{
					    console.log('respon : ', respon)
		    			newContent['_id']=respon.data._id
				    	if(typeof respon.err === "undefined") {
					    	console.log('List Sucessfully Added')
					    	
					    	this.setState({
					    		contents: this.state.contents.concat(newContent)
					    	})
					    	console.log('this.state.contents : ', this.state.contents)
				    	}else{
					    	console.log(respon.err)
					    	
				    	}
				    }
			    )
	    }catch(err){
	    }

	}
	async handleChange(listState){
		try{
			// console.log('listState',listState)
		    await updateList(listState)
			    .then(respon=>{
					    console.log('respon : ', respon)
				    	if(typeof respon.err === "undefined") {
					    	console.log('List Sucessfully Updated')
					    	
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
	async handleDeletion(id){
		console.log('need to delete id: ',id)		
		// console.log('key: ',key)		
			
		try{
		    await deleteList(id)
			    .then(respon=>{
					    console.log('respon : ', respon)
				    	if(typeof respon.err === "undefined") {
					    	console.log('List Sucessfully Deleted')
					    	this.setState(prevState => ({
					          contents: prevState.contents.filter(item => item._id!==id)
							}));
					    	console.log('this.state.contents : ', this.state.contents)
				    	}else{
					    	console.log(respon.err)
				    	}
					    	
				    }
			    )
	    }catch(err){
	    }

    }
    async handleContentChange(){
    	
    }
	render() {
		return (
			<div className={style.area}>
				{/*<EditPanel 
					value={this.state.}
					/>*/}
				<div className={style.panel}>
					<h3 className={style.title}>{APP_NAME}</h3>
					<div className={style.wrapInput}>
						<Input 
							placeholder={this.state.placeholder}
							onkeydown={this.doSubmit}
							onchange={()=>(null)}
							/>
					</div>

					{this.state.contents.map((item,key)=>{
						// console.log('item.content : ', item.content)
						return <List 
							key={item._id}
							id={item._id}
							content={item.content}
							isdone={item.isDone}
							handleChange={this.handleChange}
							handleDeletion={this.handleDeletion}
						/>
						})
					}
				</div>
			</div>
		);
	}
}
