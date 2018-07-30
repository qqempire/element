
import React from 'react'
import Home from './home'

class App extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div>	
				<h1>hello webpack-你好</h1>
				<p>hello hi </p>
				<hr/>
				<Home/>
				
			</div>
		)
	}
}

export default App;