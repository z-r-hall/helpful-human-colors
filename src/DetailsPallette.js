import React from 'react';

function DetailsPallette({setHex, hex}) {
  return (
    <div id='detPall'>
      <h3>Opacities:</h3>
      <span key='.9' style={{ backgroundColor:`${hex}`, opacity: '.9' }} className='details cardColor'>
        <span key='.9' className='hexName cardName'>
          {hex}
        </span>
      </span>
      <span style={{ backgroundColor:`${hex}`, opacity: '.7' }}  key='.7' className='details cardColor'>
        <span key='.7' className='hexName cardName'>
          {hex}
        </span>
      </span>
      <span key='.5' style={{ backgroundColor:`${hex}`, opacity: '.5' }} className='details cardColor'>
        <span key='.5' className='hexName cardName'>
          {hex}
        </span>
      </span>
      <span key='.3' style={{ backgroundColor:`${hex}`, opacity: '.3' }}  className='details cardColor'>
        <span key='.3' className='hexName cardName'>
          {hex}
        </span>
      </span>
      <span key='.1' style={{ backgroundColor:`${hex}`, opacity: '.1' }} className='details cardColor'>
        <span key='.1' className='hexName cardName'>
          {hex}
        </span>
      </span>
    </div>
  );
}

export default DetailsPallette;
