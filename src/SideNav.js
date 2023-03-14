import React from 'react';
import { colorNames, basicColors } from '../constants/constants';

function SideNav({ setShowList, setShowDetails, setHex, setSearch }) {
  function getColor(e) {
    setSearch('');
    setHex(colorNames[e.target.innerText]);
    setShowList(false);
    setShowDetails(true);
  }

  function pickRandom() {
    const random = Math.ceil(Math.random() * 100);
    fetch(`https://color-backend.onrender.com/api/${random}`)
      .then((data) => data.json())
      .then((data) => {
        setShowList(false);
        setShowDetails(true);
        setHex(data.colorHex);
      });
  }

  // function deleteColors(){
  //   for(let i = 10; i < 100; i++) {
  //   fetch(`https://color-backend.onrender.com/api/${i}`)
  //     .then((data) => data.json())
  //     .then((data) => {
  //      console.log(data)
  //     });
  //   }
  // }

  return (
    <div id='SideNav'>
      <button onClick={pickRandom}>Random Color</button>
      <br />
      {basicColors.map((el, i) => {
        return (
          <h2 id={i + 1} key={el} onClick={(e) => getColor(e)}>
            {el}
          </h2>
        );
      })}
        {/* <button onClick={deleteColors}>delete</button> */}
    </div>
  );
}
export default SideNav;
