import React from 'react';
import Card from './Card';

const Cards = ({ data }) => {
   console.log(data)

   return (
      <div>
         {data.map(character => (
            <Card key={character.char_id} {...character} />
         ))}
      </div>
   );
};

export default Cards;