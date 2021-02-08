import React from 'react'
import spinner from '../img/spinner.gif';

const Spinner = () => {
   return (
      <div style={{minWidth: '100%', textAlign: 'center', marginTop: '5rem'}}>
         <img src={spinner} alt="spinner loading gif" className="spinner"/>
      </div>
   )
};

export default Spinner
