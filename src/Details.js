import React from 'react';

function Details({hex}) {
  return (
    <div style={{ backgroundColor:`${hex}` }} className='details'>
      <div className='hexName'>{hex}</div>
    </div>
  );
}

export default Details;
