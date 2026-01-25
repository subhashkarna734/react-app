const SearchBar = ()=>{
  return (
    <div className="search-box">
      <div className="input-search-box">
        <input type="text" className="input-text" placeholder="Search for restaurants and food" autoFocus="" maxLength="200"></input>
        <span className="search-icon">🔍</span>      </div>
      </div>
  )
};

export default SearchBar;