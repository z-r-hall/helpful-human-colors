import React, { useState, useEffect } from 'react';
import { colorNames } from '../constants/constants';

function List({
  setLoaded,
  setAllColors,
  allColors,
  setShowList,
  setShowDetails,
}) {
  let all;
  const buttons = [];

  function getDetails(e) {
    const colorName = e.target.innerText;
    const color = document.querySelectorAll('.details');
    let j = 0.9;
    for (let i = 0; i < color.length; i++) {
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

  useEffect(() => {
    fetch(`http://localhost:3400/api`)
      .then((data) => data.json())
      .then((data) => {
        setAllColors(data);
        setLoaded(true);
      });
  }, []);

  for (let i = 1; i < 11; i++) {
    if (i === 1) {
      buttons.push(
        <a
          key={i}
          onClick={nextPage}
          style={{ textDecoration: 'underline' }}
          className='pagebuttons'
        >
          {i}
        </a>
      );
    } else {
      buttons.push(
        <a key={i} onClick={nextPage} className='pagebuttons'>
          {i}
        </a>
      );
    }
  }

  function nextPage(e) {
    const buttons = document.querySelectorAll('.pagebuttons');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.textDecoration = 'none';
    }
    e.target.style.textDecoration = 'underline';
    const pageNum = e.target.innerText;
    all = [];
    for (let i = (pageNum - 1) * 15; i < pageNum * 15; i++) {
      all.push(allColors[i]);
    }
    setAllColors(all);
  }

  return (
    <div id='List'>
      <div>
        {allColors.map((el, i) => {
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
      <div id='pages'>{buttons}</div>
    </div>
  );
}

export default List;