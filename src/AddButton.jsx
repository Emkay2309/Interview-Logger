import React from 'react'
import {useState} from 'react'

function AddButton(props) {
    const arr = {...props.formData}
    const [data , setData] = useState([]);

    const createList = ()=> {
        const list = {...arr};
        setData([...data,list]);
    }
    console.log(data);

  return (
    <div>
        <button className='add' onClick={createList}>Add Interview</button>
    </div>
  )
}

export default AddButton