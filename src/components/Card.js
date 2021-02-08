import React from 'react';

const Card = ({ img, name, nickname, birthday, portrayed, status }) => {

   return (
      <div className="card">
         <div className="card-inner">
            <div className="card-front">
               <img src={img} alt={name} />
            </div>
            <div className="card-back">
               <h1>{name}</h1>
               <ul>
                  <li>
                     <strong>Actor name: </strong>
                     <span>{portrayed}</span>
                  </li>
                  <li>
                     <strong>Nickname: </strong>
                     <span>{nickname}</span>
                  </li>
                  <li>
                     <strong>Birthday: </strong>
                     <span>{birthday}</span>
                  </li>
                  <li>
                     <strong>Status: </strong>
                     <span>{status}</span>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Card;