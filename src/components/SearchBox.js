import React from "react";

const SearchBox = ({searchfield,searchChange})=>{
   
    return(
        <div className="text-center bg">
            <input 
            type='search' 
            placeholder='search robomates'
            onChange={searchChange}
            >
            </input>
        </div>
    )
}

export default SearchBox;