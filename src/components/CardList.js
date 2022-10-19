import React from "react";
import Card from "./Card";

const cardlist = ({robots}) =>{

    // Custom error handling using ERRORBOUNDRY component
    // if(true){
    //     throw new Error('Custom Error')
    // }

    //mapping robots to each card : user = robot & i= id
    // const cardComponent = robots.map((user,i)=>{
    //     return <Card 
    //     key={i} 
    //     id={robots[i].id} 
    //     name={robots[i].name } 
    //     email={robots[i].email}
    //     />
            
    // })
    return(
        // <div className="box">
        //     {/* <Card id={robots[0].id} name={robots[0].name } email={robots[0].email}/>
        //     <Card id={robots[1].id} name={robots[1].name } email={robots[1].email}/>
        //     <Card id={robots[2].id} name={robots[2].name } email={robots[2].email}/> */}
        //     {/* replacing above with below */}
        //     {cardComponent}
	    // </div>
        <div className="box">
            {
            robots.map((user,i)=>{
                return(
                <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name } 
                email={robots[i].email}/>
                );
            })
        }
        </div>
    )
}
export default cardlist;