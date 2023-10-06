import { useLoaderData } from "react-router-dom";
import Header from "./Sheard/Header/Header";
import LeftSideNav from "./Sheard/LeftSideNav/LeftSideNav";

import RightSideNav from "./Sheard/RightSideNav/RightSideNav";
import { useState } from "react";
import NewsCard from "./NewsCard/NewsCard";


const Home = () => {
    const news = useLoaderData();
    console.log(news);
    return (
        <div>
            <Header></Header>
           
            <div className="grid grid-cols-1  md:grid-cols-4 mt-8">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                
                {
                    news.map(aNews => <NewsCard key={aNews._id} aNews={aNews}></NewsCard>)
                }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
           
        </div>
    );
};

export default Home;