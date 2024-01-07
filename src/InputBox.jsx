import React from 'react'
import {useState} from 'react'

function InputBox({name,type,placeholder}) {

  const [formData , setFormData] = useState({
    date:"",
    company:"",
    platform:"",
    link:"",
    reference:""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value })
  }

  return (
    <div>
        <input name={name} type={type} placeholder={placeholder} onChange={(e)=> {handleChange(e)}}/>
    </div>
  )
}

export default InputBox