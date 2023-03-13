import React, { useState } from 'react';
import { colorNames } from '../constants/constants';

function SideNav({ setShowList, setShowDetails, hex, setHex }) {
  function getColor(e) {
    setHex(colorNames[e.target.innerText])
    // const colorName = e.target.innerText;
    // const color = document.querySelectorAll('.details');
    // let j = 0.9;
    // for (let i = 0; i < color.length; i++) {
    //   console.log(color[i]);
    //   color[i].style.backgroundColor = colorName;
    //   if (i !== 0) {
    //     color[i].style.opacity = j;
    //     j -= 0.2;
    //   }
    // }
    // const hex = document.querySelectorAll('.hexName');
    // for (let i = 0; i < hex.length; i++) {
    //   hex[i].innerText = colorNames[colorName];
    // }
    setShowList(false);
    setShowDetails(true);
  }

  const [basicColors, setBasicColors] = useState([
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Purple',
    'Brown',
    'Gray',
  ]);

  const sideColors = basicColors.map((el, i) => {
    return (
      <h2 id={i + 1} key={el} onClick={(e) => getColor(e)}>
        {el}
      </h2>
    );
  });

  function pickRandom() {
    const random = Math.ceil(Math.random() * 100);
    fetch(`https://color-backend.onrender.com/api/${random}`)
      .then((data) => data.json())
      .then((data) => {
        setShowList(false);
        setShowDetails(true);
        const color = document.querySelectorAll('.details');
        let j = 0.9;
        for (let i = 0; i < color.length; i++) {
          color[i].style.backgroundColor = data.colorHex;
          if (i !== 0) {
            color[i].style.opacity = j;
            j -= 0.2;
          }
        }

        const hex = document.querySelectorAll('.hexName');
        for (let i = 0; i < hex.length; i++) {
          hex[i].innerText = data.colorHex;
        }
      });
  }
  return (
    <div id='SideNav'>
      <button onClick={pickRandom}>Random Color</button>
      <br />
      {sideColors}
    </div>
  );
}
export default SideNav;
