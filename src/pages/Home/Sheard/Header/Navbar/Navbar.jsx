import { Link } from "react-router-dom";

import { FaRegCircleUser } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../../../../Provider/AuthProvider";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleSignOut = () =>{
       logOut()
       .then(result =>{
        console.log('Logout SucsessFull');
       })
       .catch(error =>{
        console.error(error);
       })
    }
    return (
        <div className="flex justify-around items-center">
            <div>

            </div>
            <div className="space-x-4">
            <Link to={'/'}>Home</Link>
            <Link to={'/'}>About</Link>
            <Link to={'/'}>Career</Link>
        </div>
        <div className="flex gap-3 items-center">
           <FaRegCircleUser className="text-4xl"></FaRegCircleUser>
           {
            user ? <button onClick={handleSignOut} className="btn btn-accent">Sign Out</button> :  <Link to={'/login'}><button className="btn btn-accent">Login</button></Link>
           }
           
        </div>
            </div>
          
    );
};

export default Navbar;