import React from "react";
import Card from './Card';

const CardList = ({ pals }) => {
  return (
    <div>
      {
        pals.map((user, i) => {
          return (
          <Card 
            key={i} 
            id={pals[i].id} 
            name={pals[i].name} 
            email={pals[i].email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;