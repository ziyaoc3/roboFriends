import React, {Component} from 'react';


class ErrorBoundary extends Component {
	constructor ( ) {
		super ( )
		this.state ={
			componentError : false
		}
	}
	
	componentDidCatch(error, errorInfo) {
		this.setState({componentError: true})
    	// You can also log the error to an elogErrorToMyService(error, errorInfo);
  	}
	
	render () {
		if (this.state.componentError){
			return <h1 className =' f1 fw9'> Ooooops! Something is Wrong</h1>
		} else {
			return this.props.children
		}
	}	
};

export default ErrorBoundary;
