import Header from "./Sheard/Header/Header";
import LeftSideNav from "./Sheard/LeftSideNav/LeftSideNav";

import RightSideNav from "./Sheard/RightSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
           
            <div className="grid grid-cols-1  md:grid-cols-4 mt-8">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                <h1 className="text-5xl font-poppins">News is comming</h1>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
           
        </div>
    );
};

export default Home;