import React from 'react';

const Form = ({ getQuery, query }) => {

   const onChange = (q) => getQuery(q);

   return (
      <form>
         <input 
            autoFocus
            type="search"
            placeholder="Search character..."
            value={query}
            onChange={e => onChange(e.target.value)}
         />
      </form>
   );
};

export default Form;