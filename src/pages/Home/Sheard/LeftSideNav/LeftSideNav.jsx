import { useEffect, useState } from "react";


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
                    categories.map(category => <h3 key={category.id}>{category.name}</h3>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;