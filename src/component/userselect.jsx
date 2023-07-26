import React from "react";

export default function Select(props)
{
 const choice = props.users.map((user,index)=>{
    return(
    <label>
        {user}
    <input type="radio" onChange={()=>props.changeindex(index)} checked={index === props.selectedindex}/>
    </label>
    
    )
    
 }
 )
 return(
    <>
    <div className="select">
     <p>user id:</p>
     <div className="users">
       {choice}
     </div>
     </div>
    </>
 )


}