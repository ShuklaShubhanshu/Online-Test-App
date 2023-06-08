import React, { useEffect, useState } from 'react'
import TestView from './TestView'
import { LoggedInUser } from '../Login/LoggedInUser';
import Question from'../Questions.json'
import { useLocation } from 'react-router-dom';

const Online_Test = () => {
  const[userDetails,setUserDetails]=useState({
    name:"",
    email:"",
    rollNo:"",
    skillLevel: '',
})
//get the skill user has given
const {state}=useLocation();
const{skill}=state;

//to get the info of logged in user
  useEffect(()=>{
  const loggedInUser = LoggedInUser()[0];
  const {name,id,email} = loggedInUser;
  setUserDetails({
    name,
    rollNo:id,
    email,
    skillLevel:skill
  })
  },[]);


//check which skill matches
  const data = Question.filter(file => file.skillLevel == userDetails.skillLevel);

 return (
    <>
    {
    <TestView data={data} userDetails={userDetails} />
    }
    </>
  )
}

export default Online_Test