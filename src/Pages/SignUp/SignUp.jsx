import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {createUser} = useContext(AuthContext)
  const onSubmit = data =>{
     console.log(data);
     createUser(data.email, data.password)
     .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        position: 'top-cneter',
        icon: 'success',
        title: 'Signing Up Successfully',
        showConfirmButton: false,
        timer: 1500
      })
     })
    };
   
  return (
    <div className="hero min-h-screen bg-light">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold font-mono mb-8">Sign Up First</h1>
         
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="name"
                className="input input-bordered"
              />
               {errors.name && <span className="text-red-500">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
               {errors.email && <span className="text-red-500">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", { required: true,minLength: 6, maxLength: 20 })}
                placeholder="password"
                className="input input-bordered"
              />
               {errors.password && <span className="text-red-500">Password is required</span>}

               {/* for max length */}
               {errors.password?.type ==='maxLength' && <span className="text-red-500">Password Must Be Under 20 Characters</span>}

               {/* min length */}
               {errors.password?.type ==='minLength' && <span className="text-red-500">Password Should Be Atleast 6 Characters</span>}
              <label className="label">

                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
             
              <input  className="btn btn-outline border-0 border-b-2 border-yellow-500 hover:bg-black mt-5" type="submit" value="Sign UP" />
                
            </div>
          </form>
          <p className="ml-5"><small>Already Have An Account? <Link className="text-primary underline" to='/login'>Login Here</Link></small></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
