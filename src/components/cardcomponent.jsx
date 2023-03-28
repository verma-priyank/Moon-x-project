import React from "react";


import { useSelector } from "react-redux";

const Card =() => {
    const {userData ,loading  } = useSelector(state => state.user)


    return (<div className="card-list">
         {!loading && (userData.map(user => {
         return (
           <div className="card-container" key={user.id}>
           <img  src={user.avatar} alt={` ${user.first_name}`} />
           <h1>{user.first_name } {user.last_name}</h1>
           <p>{user.email}</p></div>)
        }))}</div>)
}

export default Card;