import React from 'react';
import { colorNames } from '../constants/constants';

function Filtered({ setShowDetails, setShowList, colorHex }) {
  function getDetails(e) {
    const colorName = e.target.innerText;
    const color = document.querySelectorAll('.details');
    let j = 0.9;
    for (let i = 0; i < color.length; i++) {
      console.log(color[i]);
      color[i].style.backgroundColor = colorName;
      if (i !== 0) {
        color[i].style.opacity = j;
        j -= 0.2;
      }
    }
    const hex = document.querySelectorAll('.hexName');
    for (let i = 0; i < hex.length; i++) {
      hex[i].innerText = colorNames[colorName];
    }
    setShowDetails(true);
    setShowList(false);
  }

  return (
    <div id='List'>
      <div>
        {colorHex.map((el, i) => {
          if (i < 15) {
            return (
              <span
                onClick={getDetails}
                id={el.colorHex}
                style={{ backgroundColor: el.colorHex }}
                key={el._id}
                className='details cardColor'
              >
                <span key={el._id + '1'} className='hexName cardName'>
                  {el.colorHex}
                </span>
              </span>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Filtered;
