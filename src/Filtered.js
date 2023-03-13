import React from 'react';
import { colorNames } from '../constants/constants';

function Filtered({ setShowDetails, setShowList, colorHex }) {
  function getDetails(e) {
    setHex(e.target.innerText);
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
