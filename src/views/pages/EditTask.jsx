import { useParams } from 'react-router-dom'
import React, {useState,useEffect} from 'react';
import { Config } from '../../model/Config';

  const EditTask = () => {

    const { id } = useParams()

    const [name, setName] = useState("");
    const [department_id, setDepartment] = useState(0);
    const [task_type_id,setType] = useState(0);
    const [duration,setDuration] = useState(0);


    const handleSubmit = (e) => {
      e.preventDefault();
     

      let data={
        id:id,
        name: name,
        department_id: department_id,
        duration:duration,
        task_type_id:task_type_id
      }
        //Method 2: 'Content-Type': 'application/x-www-form-urlencoded'
      
        fetch(`${Config.baseUrl}/Task/update`, {
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


    useEffect(()=>{  

      fetch(`${Config.baseUrl}/Task/find`,{
        method:'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:new URLSearchParams({id:id}).toString()
       
      }).then((res)=>res.json())
      .then((res)=>{              
       setName(res.task.name);
       setDepartment(res.task.department_id);
       setType(res.task.task_type_id);
       setDuration(res.task.duration);

      });

      //console.log(id);

    },[id]);

    return (
        <div style={{width:"600px", margin:"auto"}}>
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label className='form-label'>Name</label>
                    <input className='form-control' type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                
                <div className='mb-2'>
                    <label className='form-label'>Department</label>
                    <select className='form-control' value={department_id} onChange={(e) => setDepartment(e.target.value)}>
                        <option value="1">Accounts</option>
                        <option value="2">IT</option>
                        <option value="3">HR</option>
                        <option value="4">Sales and Marketing</option>
                        <option value="5">Academic</option>
                    </select>         
                </div>
                
                <div className='mb-2'>
                    <label className='form-label'>Type</label>
                    <select className='form-control' onChange={(e) => setType(e.target.value)} value={task_type_id}>
                        <option value="1">Regular</option>
                        <option value="2">Irregular</option>
                    </select>
                </div>
                
                <div className='mb-2'>
                    <label className='form-label'>Duration</label>
                    <input className='form-control' type="text" value={duration} onChange={e => setDuration(e.target.value)} />
                </div>
                
                <input className='btn btn-primary mt-2' type="submit" value="Submit" />
            </form>
        </div>
    );


  };
  
  export default EditTask;