import { Link } from "react-router-dom";
import Navbar from "../Home/Sheard/Header/Navbar/Navbar";


const Login = () => {
    const handleLogin = e =>{
        e.preventDefault()
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        console.log(form.get('email'));              
    }

    return (
        <>
        <Navbar></Navbar>
          <div className="grid justify-center ">
            <h2 className="text-3xl font-semibold">Please Login</h2>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-3">
      <form onSubmit={handleLogin} className="card-body">
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p>If you dont have any account. <Link to={'/register'} className="text-green-500 font-bold">Register Now</Link></p>
    </div>
        </div>
        </>
      
    );
};

export default Login;