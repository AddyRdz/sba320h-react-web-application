import React from "react";
import { useState } from "react";

export default function Search(props) {
  const [searchData, setSearchData] = useState({
    searchTerm: "",
  });

  const handleChange = (event) => {
    setSearchData({ ...searchData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.artSearch(searchData.searchTerm);
  };
  return (
    <div className="searchContainer">
    <div className="searchForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          onChange={handleChange}
          value={searchData.searchTerm}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
    </div>
  );
}
