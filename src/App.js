import React, { useState } from 'react';
import '../public/styles.scss';
import TopNav from './TopNav';
import SideNav from './SideNav';
import List from './List';
import Details from './Details';
import DetailsPallette from './DetailsPallette';

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showList, setShowList] = useState(true);
  const [allColors, setAllColors] = useState([]);
  const [tempAllColors, setTempAllColors] = useState([]);
  const [colorHex, setColorHex] = useState([]);
  const [hex, setHex] = useState('');
  const [search, setSearch] = useState('Search');

  function backToList() {
    setShowDetails(false);
    setShowList(true);
  }

  return (
    <div>
      <div>
        <TopNav
          setShowDetails={setShowDetails}
          setShowList={setShowList}
          allColors={allColors}
          setAllColors={setAllColors}
          colorHex={colorHex}
          setColorHex={setColorHex}
          hex={hex}
          setHex={setHex}
          tempAllColors={tempAllColors}
          setTempAllColors={setTempAllColors}
          search={search}
          setSearch={setSearch}
        />
        <div id='container'>
          <SideNav
            setShowDetails={setShowDetails}
            setShowList={setShowList}
            setHex={setHex}
            setSearch={setSearch}
          />
          {!loaded && <div id='loading'>Loading...</div>}
          {showList && (
            <List
              colorHex={colorHex}
              setColorHex={setColorHex}
              setAllColors={setAllColors}
              allColors={allColors}
              setLoaded={setLoaded}
              setShowDetails={setShowDetails}
              setShowList={setShowList}
              hex={hex}
              setHex={setHex}
              setTempAllColors={setTempAllColors}
              tempAllColors={tempAllColors}
              search={search}
              setSearch={setSearch}
            />
          )}
          {showDetails && (
            <div id='detailsContainer'>
              <Details hex={hex} />
              <DetailsPallette hex={hex} />
              <div id='clear'>
                <button onClick={backToList}>Clear</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
