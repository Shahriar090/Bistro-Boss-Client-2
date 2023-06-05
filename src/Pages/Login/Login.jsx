import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';

const Login = () => {

  const [disabled, setDisabled] = useState(true);

  const captchaRef = useRef(null);

useEffect(()=>{
  loadCaptchaEnginge(6); 
},[])
  
  const handleLogin = (event)=>{
    
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   
     
      console.log(email, password);
     
  }
  const handleValidateCaptcha = ()=>{
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value)
    if(validateCaptcha(user_captcha_value)){
      setDisabled(false)

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
               
                <input
                  type="text"
                  name="captcha"
                  placeholder="Enter Captcha"
                  className="input input-bordered"
                  ref={captchaRef}
                
                />
                <button onClick={handleValidateCaptcha} className="btn btn-xs btn-outline border-0 border-b-2 border-yellow-400 mt-5 mb-5">Validate</button>
                
              </div>
              <div className="form-control mt-6">
              <input disabled={disabled}  className="btn btn-outline border-0 border-b-2 border-yellow-500 hover:bg-black mt-5" type="submit" value="Login" />
                
              </div>
              
            </form>
            
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
