import { useEffect, useState } from "react";
import moment from 'moment';
import { AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";
import img1 from '../../../../assets/1.png'
import img2 from '../../../../assets/2.png'
import img3 from '../../../../assets/3.png'


const LeftSideNav = () => {
    const [categories, setCategories] =useState([]);

    useEffect(()=>{
        fetch('../../../../../public/data/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h3 className="font-bold">All Categories</h3>
            <div>
                {
                    categories.map(category => <Link to={`category/${category.id}`} className="flex flex-col gap-2 px-2" key={category.id}>{category.name}</Link>)
                }
            </div>
            <div className="mt-4">
                <div>
                 <img src={img1} alt="" />
                 <h3 className="font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                 <div className="flex gap-2">
                    <p>Sport</p>
                    <p><AiOutlineCalendar/> {moment().format("dddd, MMMM D, YYYY")}</p>

                 </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;