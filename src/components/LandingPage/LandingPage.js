import React from 'react';
import {CATEGORYS} from '../Config';

const LandingPage = () => {
    return (
        <div>
            {CATEGORYS.map((item,index)=>{return <div><a href={`/category/${item}`} key={index}>{item}</a></div>})}
        </div>
    )
}

export default LandingPage