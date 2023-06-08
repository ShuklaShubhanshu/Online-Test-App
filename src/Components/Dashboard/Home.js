import React, { useState } from 'react'
import HomeView from './HomeView'

const Home = () => {
  const[skill,setSkill]=useState("")
  return (
    <>
    <HomeView skill={skill} setSkill={setSkill}/>
    </>
  )
}

export default Home