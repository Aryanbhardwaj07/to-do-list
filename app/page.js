"use client"
import React,{ useState } from 'react'

const page = () => {
  const [title, settitle]= useState("")
  const [desc, setdesc]= useState("")
  const [maintask,setMainTask]= useState([])
  const submitHandeler=(e)=>{
    e.preventDefault()
    setMainTask([...maintask,{title,desc}])
    settitle("")
    setdesc("")
    console.log(maintask)
  }
  let renderTask=<h2>No Task Avilable</h2>
  if(maintask.length>0){

    
    renderTask=maintask.map((t,i)=>{
      return(
      <li className='flex items-center justify-between mb-5'>
      <div className='flex items-center w-2/3 justify-between mb-5'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-2xl font-semibold'>{t.desc}</h6>
      </div>
      <button className='bg-red-400 mb-5 text-white rounded px-4 py-2 font-bold'>Delete</button>
    </li>
    )
  })
}
  return (
     <>
      <h1 className='bg-black text-2xl font-bold text-center text-yellow-500 p-5'>Aryan TODO List</h1>
<form onSubmit={submitHandeler}>

      <input value={title} onChange={(e)=>{settitle(e.target.value) }}
       placeholder='Enter Task Here' type="text" className='border-zinc-800 border-4 m-5 px-4 py-2'/>
      
      <input value={desc} onChange={(e)=>{setdesc(e.target.value) }} 
      placeholder='Enter Description' type="text" className='border-zinc-800 border-4 m-5 px-4 py-2'/>
      
      <button className='bg-black text-white rounded  text-center  px-2 py-2 m-4'> Add Task </button>
      </form>
<hr/>
      <div className='p-8 bg-cyan-400'>
      <ul>
        {renderTask}
      </ul>
      </div>
    </>
    
  )
}

export default page

