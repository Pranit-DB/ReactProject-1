import React from "react";
// import { ReactDOM } from "react";
import "../index.css";

// const Card = (props) =>{
    // destructing through passing parameters ES6+ feature
const Card = ({name, email ,id}) =>{
    // destructing
    // const {name, email ,id} = props;

    return(
        <div className="card">
            <div className="imgBx">
            {/* <img className="imgBx" alt='robots'src="https://randomuser.me/portraits/men/19.jpg"/> */}
            <img alt='robots'src={`https://robohash.org/${id} `}/>
            </div>
            <div className="details">
                <h2>{name}</h2>
                <span>{email}</span>
            </div>
        </div>
    )
};

export default Card;