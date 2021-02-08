import React from 'react';
import Card from './Card';
import Spinner from './Spinner';

const Cards = ({ data, isLoading }) => {

   return (
      <>
         {isLoading ? (
            <Spinner />
         ) : (
         <div className="cards">
            {data.map(character => (
            <Card key={character.char_id} {...character} />
            ))}
         </div>
         )}
      </>
   );
};

export default Cards;