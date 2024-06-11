import React, { useState, useEffect } from 'react';
import '../css/style.css';
import '../css/responsive.css';
import '../App.css';
import foodsData from '../data/foods';
import { Link } from 'react-router-dom'; 

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      setShowSuggestions(true);
      const filteredSuggestions = foodsData.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(
        filteredSuggestions.length > 0
          ? filteredSuggestions
          : [{ name: "No results found", id: null }]
      );
    } else {
      setShowSuggestions(false);
    }
  }, [searchTerm]);

  return (
    <form>
      <div className="search-form">
        <p>You can discover more recipes and dishes.</p>
        <div className="searching">
          <span className="search-icon material-symbols-outlined">search</span>
          <input
            className="search-input"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {showSuggestions && (
          <ul className="suggestions-search">
            {suggestions.map((suggestion, index) => (
              <li key={index}>
                {suggestion.id ? (
                  <Link to={`/food-details/${suggestion.id}`}>
                    {suggestion.name}
                  </Link>
                ) : (
                  suggestion.name 
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}

export default Search;
