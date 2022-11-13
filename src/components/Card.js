import React from "react";
import "../index.css";

const Card = ({name, email ,id}) =>{
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
