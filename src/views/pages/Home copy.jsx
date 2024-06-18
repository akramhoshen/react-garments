import React, {useState,useEffect} from 'react';
import { Config } from '../../model/Config';
import { useNavigate,Link  } from "react-router-dom";
import EditIc from '@mui/icons-material/ModeEdit';
import DeleteFor from '@mui/icons-material/DeleteForever';

const Home = () =>{  

    let navigate=useNavigate();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);    
    const [tasks,setTasks]=useState([]);
   
    useEffect(()=>{ 
      fetchTasks();

    },[]);

    function fetchTasks(){
      fetch(`${Config.baseUrl}/Task`)
      .then((res) => res.json())
      .then((result) => {        
         setIsLoaded(true);
         setTasks(result.tasks);        
      }).catch((err) => {          
          setError(err);         
      }); 
    }


    const handleEdit=(id)=>{
      navigate(`/edit-task/${id}`);
      
    }

    const handleDelete=(id)=>{
           
          let data={id:id}

          fetch(`${Config.baseUrl}/Task/delete`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data).toString()
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            //console.log(data);
            fetchTasks();

          })
          .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
          });
    }

    if (error) return <div>Error: {error.message}</div>;
    if (!isLoaded) return <div>Loading...</div>;
      
    return (
      <>
        <h1>Tasks</h1>
         <Link className='btn btn-success mb-2 ' to="/create-task">
           New Task
         </Link>
        <table className='table table-bordered'>
          <thead>
          <tr style={{background: "#f2f2f2"}}><th>Id</th><th>Name</th><th>Duration</th><th>Action</th></tr>
          </thead>
          <tbody>
        {tasks.map(task => (
          <tr key={task.id}>
            <td>{task.id}</td> 
            <td>{task.name}</td> 
            <td>{task.duration}</td>
            <td>
              <button className='btn btn-primary me-2' onClick={() =>handleEdit(task.id)}><EditIc/></button>
              <button className='btn btn-danger ' onClick={() =>handleDelete(task.id)}><DeleteFor/></button>
            </td>
          </tr>
        ))}
        </tbody>
        </table>
      </>
    );
  
  };
  
  export default Home;