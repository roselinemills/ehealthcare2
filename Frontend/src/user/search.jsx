import { useState } from "react";

function Search({setSearchTerm,searchTerm}) {
    // const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {


        setSearchTerm(e.target.value);
      };

    //   const handleSearch = () => {
    //     onSearch(searchTerm);
    //   };


    return (  <div>
        <div >

        <div className="input-group mb-3 r px-2" >
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary px-2"
          type="button"
        style={{width:'2em'}}
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
    </div>

        </div>


    </div>);
}

export default Search;