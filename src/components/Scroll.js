import React from "react";

// state->props-> CHILDREN
const Scroll = (props) =>{
    // console.log(props);
    return (
        <div style={{
            overflowY:'scroll',
            overflowX:'hidden',
            border:'none', 
            height:'450px',
            scrollbarWidth:'thin'}}>
            {props.children}
        </div>
    )
}

export default Scroll;