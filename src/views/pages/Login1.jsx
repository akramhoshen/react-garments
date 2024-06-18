import { useNavigate } from "react-router-dom";

export default function Login(){    
    const navigate = useNavigate();

    const loginHandle=(e)=>{
        console.log("Login");
        //window.location.replace('/home');
        navigate("/home");
    }

    return(
        <div className="container">
            <div className="row mt-3">
                <div className="col-12">
                    <div className="card p-3">
                        <form>
                            <div class="mb-3">
                                <label for="username" class="form-label">Username</label>
                                <input type="text" class="form-control" id="username"/>
                            </div>
                            <div class="mb-3">
                                <label for="Password" class="form-label">Password</label>
                                <input type="password" class="form-control" id="Password" />
                            </div>
                            <button type="submit" onClick={loginHandle} class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}