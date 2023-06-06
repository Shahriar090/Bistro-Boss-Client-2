import { useContext } from "react";
import { useEffect,  useState } from "react";
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

 

  const {signIn} = useContext(AuthContext);

useEffect(()=>{
  loadCaptchaEnginge(6); 
},[])
  
  const handleLogin = (event)=>{
    
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    Swal.fire({
      position: 'top-cneter',
      icon: 'success',
      title: 'Login Successful',
      showConfirmButton: false,
      timer: 1500
    })
    navigate(from, { replace: true });
      
    
    // sign in method

    signIn(email, password)
      .then(result =>{
        const user = result.user
        console.log(user);
      } )
      
     
  }
  const handleValidateCaptcha = (event)=>{
    const user_captcha_value = event.target.value
    
    if(validateCaptcha(user_captcha_value)){
      setDisabled(false)

    }
    else{
      setDisabled(true)
    }
    

  }
  
  return (
    <>
    
      <div>
        {/* <h2 className="text-5xl font-mono font-semibold text-center mt-10 bg-black text-white hover:animate-pulse rounded-full">
          Login Please
        </h2> */}
      </div>

      <div className="mt-5 mb-5 rounded-full">
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            
          </div>
          <div className="card  w-full h-full sm:max-w-sm shadow-2xl bg-base-100">
            <h2 className="text-2xl text-center font-mono font-semibold mt-5 mb-5 hover:animate-pulse">Login Please</h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
               
                <input onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Enter Captcha"
                  className="input input-bordered"
                
                
                />
                <p className="text-center text-green-600">Click here for validate</p>
                {/* <button  className="btn btn-xs btn-outline border-0 border-b-2 border-yellow-400 mt-5 mb-5">Validate</button> */}
                
              </div>
              <div className="form-control mt-6">
              <input disabled={disabled}  className="btn btn-outline border-0 border-b-2 border-yellow-500 hover:bg-black mt-5" type="submit" value="Login" />
                
              </div>
              
            </form>
            <p className="ml-5"><small>New Here? <Link className="text-primary underline" to='/signup'>Sign Up First</Link></small></p>
            
          </div>
          <Link to = '/'>
           
          <button className="btn btn-outline border-0 border-b-2 border-yellow-500 hover:bg-black mt-5">
        Back
      </button>
          </Link>
        </div>
      </div>
      
      </div>
      
      
    </>
  );
};

export default Login;
