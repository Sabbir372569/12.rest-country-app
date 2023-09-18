/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {

     const [country, setCountry] = useState([]);

     useEffect(()=>{
         fetch('https://restcountries.com/v3.1/all')
         .then(res => res.json())
         .then(data => setCountry(data));
     }, [])

    return (
        <div className=''>
            <h3>Country : {country.length}</h3>
            {
                country.map(country =>
                <Country key={country.cca3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;