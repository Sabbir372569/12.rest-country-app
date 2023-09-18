/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Country = ({country}) => {

    const {name, flags} = country;

    return (
        <div className='border-2 border-yellow-500 m-4 p-3 rounded'>
            <h3>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;