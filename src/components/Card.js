import React from 'react';

const Card = ({name, email, id}) => {
  return (
    <div className='tc grow bg-lightest-blue br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='avatars' src={`https://avatars.dicebear.com/api/adventurer/${id}.svg?size=200`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;