// import React from 'react';

// export default class SearchBar extends React.Components {
//     render() {
//         return(
//             <div>
//                 <input className="search-bar"></input>
//             </div>
//         )
//     }
// }

import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"search for a friend"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar