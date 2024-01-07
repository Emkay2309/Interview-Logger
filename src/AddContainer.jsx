import React, { useEffect,useRef } from 'react'
import './App.css'
import {useState} from 'react'


function AddContainer() {

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

  const [data , setData] = useState([]);
  const createList = () => {
    if(formData.company && formData.date && formData.platform)  {
      const newItem = {
        id : Date.now(),
        date : formData.date,
        company : formData.company,
        platform : formData.platform,
        link: formData.link,
        reference:formData.reference,
      };
      setData([...data , newItem]);
      setFormData({date:"",company:"",platform:"",link:"",reference:""});
    }
  }
  console.log(data);

  const handleDelete = (id) =>{
    const updateList = data.filter((item)=> item.id != id);
    setData(updateList);
  }

  const [editId , setEditId] = useState(false);
  useEffect(()=>{
    if(!editId) {
      return;
    }
    let selectedItem = document.querySelectorAll(`[id='${editId}']`);
    selectedItem[0].focus();
  },[editId]);

  const outsideClick = useRef(false);

  useEffect(()=>{
    const handleOutside = (event)=>{
      if(outsideClick.current && !outsideClick.contains(event.target)){
        setEditId(false);
      }
    }
    document.addEventListener("click" , handleOutside);

    return ()=> {
      document.removeEventListener("click" , handleOutside);
    }
  },[]);

  const handleEdit = (id , updatedData)=>{
    if(!editId || edit != id) {
      return;
    }
    const updatedList = data.map((item) => item.id === id ? {...item,updatedData} : item);
    setData(updatedList);
  
  }

  return (
    <>
        <div className='info-container'>
                <input type="date"
                name="date"
                value={formData.date}
                onChange={(e)=> {
                  handleChange(e);
                }}/>
                
                <input 
                  type="text" 
                  placeholder='Company Name'
                  name="company"
                  value={formData.company}
                  onChange={(e)=> {
                    handleChange(e);
                  }}
                />

                <select required name='platform' onChange={handleChange}>
                    <option value="" disable="true"  hidden>Platform</option>
                    <option name="platform"  value="Naukri">Naukri</option>
                    <option name="platform"   value="LinkedIn">LinkedIn</option>
                    <option name="platform"   value="Monster">Monster</option>
                    <option name="platform"   value="Indeed">Indeed</option>
                    <option name="platform"   value="Shine">Shine</option>
                    <option name="platform"   value="TimesJobs">TimesJobs</option>
                    <option name="platform"   value="Freshersworld">Freshersworld</option>
                    <option name="platform"   value="Hirist">Hirist</option>
                    <option name="platform"  value="Others">Others</option>
                </select>

                <input type='text' 
                placeholder='Link'
                name='link'
                value={formData.link}
                onChange={handleChange}/>

                <input type='text' 
                name='reference'
                placeholder='Reference'
                value={formData.reference}
                onChange={handleChange}/>
  
            </div> 

            <button className='add' onClick={createList}>Add Interview</button>

            <div className='table-container'>
        <input className="search"
        type='text' 
        placeholder='search by name'
        onChange={()=>{}}/>

        <table ref ={outsideClick}>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Company</th>
                    <th>Platform</th>
                    <th>Link</th>
                    <th>Refernce</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
              {
                data.map((item) => (
                    <tr key={item.id}>
                      <td id={item.id} contentEditable={editId===item.id}
                      onBlur={(e)=> 
                      handleEdit(item.id , {date:e.target.innerText})}>{item.date}</td>

                      <td id={item.id} contentEditable={editId===item.id} 
                      onBlur={(e)=> 
                      handleEdit(item.id , {company:e.target.innerText})}>{item.company}</td>

                      <td id={item.id} contentEditable={editId===item.id}  
                      onBlur={(e)=> 
                        handleEdit(item.id , {platform:e.target.innerText})}>{item.platform}</td>

                      <td id={item.id} contentEditable={editId===item.id} onBlur={(e)=> 
                      handleEdit(item.id , {link:e.target.innerText})}>{item.link}</td>

                      <td id={item.id} contentEditable={editId===item.id} onBlur={(e)=> 
                      handleEdit(item.id , {reference:e.target.innerText})}>{item.reference}</td>

                      <td className='actions'>
                        <button className='edit'
                        onClick={()=>setEditId(item.id)}>Edit</button>

                        <button className='delete' 
                        onClick={()=>handleDelete(item.id)}>Delete</button>
                      </td>
                    </tr>
                ))
              }
            </tbody>
        </table>

        <div className='pagination'></div>
    </div>
    </>
  )
}

export default AddContainer