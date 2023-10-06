import React from 'react';
import Header from '../Home/Sheard/Header/Header';
import RightSideNav from '../Home/Sheard/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';

const NewsDetails = () => {
    const {id} = useParams();
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-4'>
                <div className='col-span-3'>
                    this is details
                    <p>{id}</p>
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default NewsDetails;