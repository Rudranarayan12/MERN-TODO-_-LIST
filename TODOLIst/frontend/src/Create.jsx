import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {
  const [task,setTask]=useState()
  const handleAdd = ()=>{
    axios.post('http://localhost:4000/add',{task:task})
    .then(result=>{
      window.location.reload()
    })
    .catch(err=>{console.log(err)})
  }
  return (
    <div>
      <input type="text" placeholder='enter task' onChange={(e)=>setTask(e.target.value)} />
      <button type='button' onClick={handleAdd}>Add</button>

    </div>
  )
}

export default Create
