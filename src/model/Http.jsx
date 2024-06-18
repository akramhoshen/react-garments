import axios from "axios";
export default axios.create({
    baseURL:"http://localhost/Laravel-Practice-ERP/public/api",
    baseURLCI:"http://localhost:8000/api",
    headers:{
        "Content-Type":"application/json"
    }
})