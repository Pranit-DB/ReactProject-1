import React, {Component} from "react";

class ErrorBoundry extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            hasError:false
        }
    }
    // react lifeCycle method: catches if anything goes wrong in child component
    componentDidCatch(error,info){
        this.setState({hasError:true})
    }

    render(){
        if(this.state.hasError){
            return <h1>Oops! Somehing went wrong!</h1>
        }
        else{
            return this.props.children;
        }
    }
}

export default ErrorBoundry;