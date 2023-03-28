import React from 'react'
import "./header.styles.scss"
import { useDispatch , useSelector} from "react-redux";
import { getUserData } from '../store/userReducer';
import Loader from "./spinner";
import Card from './cardcomponent';
const Header = () => {
    const dispatch = useDispatch()
   const {loading} = useSelector(state => state.user)
   console.log(loading)
  const handleClick =() =>{
    dispatch(getUserData())
  }
  
  return (
    <>
    <div className='header'>
       <span className='logo'>
         Moon X
       </span>
       <span>
       <button onClick={handleClick}>Get Users</button>
       </span>
       
    </div>
   {!loading ?  <Card/>:<Loader/> }
    </>
  )
}

export default Header