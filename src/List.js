import React, { useEffect } from 'react';

function List({
  setLoaded,
  setAllColors,
  allColors,
  setShowList,
  setShowDetails,
  setHex,
  setTempAllColors,
  setSearch,
}) {
  useEffect(() => {
    fetch(`https://color-backend.onrender.com/api`)
      .then((data) => data.json())
      .then((data) => {
        setAllColors(data);
        setTempAllColors(data);
        setLoaded(true);
      });
  }, []);

  function getDetails(e) {
    setSearch('');
    setHex(e.target.innerText);
    setShowDetails(true);
    setShowList(false);
  }

  function nextPage(e) {
    fetch(`https://color-backend.onrender.com/api`)
      .then((data) => data.json())
      .then((data) => {
        data.map((el, i) => console.log(i));
        const buttons = document.querySelectorAll('.pagebuttons');
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].style.textDecoration = 'none';
        }

        e.target.style.textDecoration = 'underline';
        const pageNum = Number(e.target.innerText);
        all = [];
        for (let i = (pageNum - 1) * 15; i < pageNum * 15; i++) {
          all.push(data[i]);
        }
        setAllColors(all);
      });
  }

  let all;
  const buttons = [];
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
