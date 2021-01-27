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
import friendSearchedData from './data.js';

const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
let keyword = ''
class SearchBar extends React.Component {

  // return(
  //   <>
  //   {friendSearchedData.map((data, index) => {
  //     if (data) {
  //       return (
  //         // 
  //         <h1>{data.username}</h1>
  //       );
  //     }
  //     return null;
  //   })}
  //   </>
  // );
  
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchBar