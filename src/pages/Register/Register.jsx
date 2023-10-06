import { Link } from "react-router-dom";
import Navbar from "../Home/Sheard/Header/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        console.log(form.get('email')); 
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
              <div className="grid justify-center ">
            <h2 className="text-3xl font-semibold">Register Now</h2>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-3">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p>If you already have an account <Link to={'/login'} className="text-red-500 font-bold">Login Now</Link></p>
    </div>
    
        </div>
        </div>
    );
};

export default Register;