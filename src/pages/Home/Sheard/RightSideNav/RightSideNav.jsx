
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";
import kids1 from '../../../../assets/qZone1.png'
import kids2 from '../../../../assets/qZone2.png'
import kids3 from '../../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
            <h3 className="font-bold mb-1">Login With</h3>
            <div className="space-y-3">
                <button className="btn btn-outline border-sky-400 w-full"><FcGoogle/> Login With Google</button>
                <button className="btn btn-outline border-sky-400 w-full"><BsGithub/> Login With Github</button>
            </div>
            <div className="mt-5">
                <h3 className="font-bold">Find Us On</h3>
                <div className="flex flex-col">
                    <a className='flex items-center gap-1 border py-2 px-2 rounded-t-lg border-slate-200 border-b-0' href="#"><BiLogoFacebook className="text-blue-600"></BiLogoFacebook> Facebook</a>
                    <a className='flex items-center gap-1 border py-2 px-2 border-slate-200 border-b-0' href="#"><BiLogoTwitter className="text-sky-600"></BiLogoTwitter>Twitter</a>
                    <a className='flex items-center gap-1 border py-2 px-2 border-slate-200 rounded-b-lg' href="#"><BiLogoInstagram className="text-red-300"></BiLogoInstagram>InstaGarm</a>
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-4 bg-sky-400 rounded-lg">
                <div className="mx-auto">
                <img src={kids1} alt="" />
                </div>
                <div className="mx-auto">
                <img src={kids2} alt="" />
                </div>
                <div className="mx-auto">
                <img src={kids3} alt="" />
                </div>
               
            </div>
        </div>
    );
};

export default RightSideNav;