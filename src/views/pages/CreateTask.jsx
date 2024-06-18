import React, {useState} from 'react';
// import Button from '@mui/material/Button';
import { Config } from '../../model/Config';


export default function CreateTask(props) {

  const [name, setName] = useState("");
  const [department_id, setDepartment] = useState(0);
  const [task_type_id,setType] = useState(0);
  const [duration,setDuration] = useState(0);
  
  const handleSubmit = (e) => {
      e.preventDefault();
     /*
      console.log(name);
      console.log(category_id);
      console.log(description);
      console.log(type_id);
      console.log(duration_hrs);
      */

      let data={
        name: name,
        department_id: department_id,
        duration:duration,
        task_type_id:task_type_id
      }

      /* //Method 1: multipart/form-data
      const formData = new FormData();
      for (const key in data) {
         formData.append(key, data[key]);
      }

      fetch(`${Config.baseUrl}/TaskApi/save`, {
        method: 'POST',    
        body:formData
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));     
     */
       
        //Method 2: 'Content-Type': 'application/x-www-form-urlencoded'
      
        fetch(`${Config.baseUrl}/Task/save`, {
        method: 'POST',        
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data).toString()
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));    

   }


   

  return (
    <div style={{width:"600px", margin:"auto"}}>
      <form onSubmit={handleSubmit}>
  
        <div className='mb-2'>
          <label className='form-label'>Name</label>
          <input className='form-control' type="text" onChange={e => setName(e.target.value)} />
        </div>
      
        <div className='mb-2'>
          <label className='form-label'>Department</label>
          <select className='form-control' onChange={(e)=>setDepartment(e.target.value)}>
            <option value="1">Accounts</option>
            <option value="2">IT</option>
            <option value="3">HR</option>
            <option value="4">Sales and Marketing</option>
            <option value="5">Academic</option>
          </select>
        </div>

        <div className='mb-2'>
          <label className='form-label'>Task Type</label>
          <select className='form-control' onChange={(e)=>setType(e.target.value)}>
            <option value="1">Regular</option>
            <option value="2">Irregular</option>
          </select>
        </div>

        <div className='mb-2'>
          <label className='form-label'>Duration</label>
          <input className='form-control' type="text" onChange={e => setDuration(e.target.value)} />
        </div>

        <input className='btn btn-primary mt-2' type="submit" value="Submit" />
      </form>
    </div>
  );
}