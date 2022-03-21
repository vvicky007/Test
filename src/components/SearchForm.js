import "./SearchForm.css";
import React,{useState} from "react";

function SearchForm({searchVal,setSearchVal}) {
  
  function handleSubmit(e) {
    // setSearchVal(e.target.value)
    e.preventDefault();
  }
  return (
    <section className="section-search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <h4>Search Your Favorite Cocktail</h4>
          <input
            type="text"
            className="input-form"
            value={searchVal}
            onChange = {(e)=>{
              setSearchVal(e.target.value)
            }}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
