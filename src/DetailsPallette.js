import React from 'react';

function DetailsPallette({ hex }) {
  const details = [];
  for (let i = 0.9; i > 0; i -= 0.2) {
    details.push(
      <span
        key={i}
        style={{ backgroundColor: `${hex}`, opacity: `${i}` }}
        className='details cardColor'
      >
        <span key={i} className='hexName cardName'>
          {hex}
        </span>
      </span>
    );
  }

  return (
    <div id='detPall'>
      <h3>Opacities:</h3>
      {details}
    </div>
  );
}

export default DetailsPallette;
