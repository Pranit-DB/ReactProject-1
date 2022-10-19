import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import Scroll from "../components/Scroll";
import { robots } from "../robots";

import ErrorBoundry from "../components/ErrorBoundry";

// const state = {
//     robots: robots,
//     searchfield:''
// }
// const App = ()=>{
class App extends Component{

    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield:''
        }
    }
    componentDidMount(){

        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response =>response.json())
        //     .then(users=>{this.setState({robots:robots})});
        this.setState({robots:robots})
    }


//  SearchBox event use => function to avoid (reading 'setState') like error
    onSearchChange = (event)=>{
        this.setState({searchfield:event.target.value})
    }

    render(){
        // destructuring this.state
        const{robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robo=>{
            return robo.name.toLocaleLowerCase()
                .includes(searchfield.toLocaleLowerCase());
        })
        // Display "Loading..." while it's loading
        // if(robots.length===0){
        //     return <h1>Loading...</h1>
        // }else{
            return !robots.length ? <h1>Loading...</h1> :
            // return
            (
                <div className="text-center">
                    <h1 className="sticky">Robo-Mates</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                        {/* <CardList robots={robots}/> */}
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }
}
export default App;