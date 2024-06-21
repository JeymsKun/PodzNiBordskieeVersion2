import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
    <div>
      <Helmet>
        <style>{`
          form {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .search-form {
            position: absolute;
            left: 0;
            margin-top: 330rem;
            margin-left: 22rem;
          }
          .searching {
            --padding: 14px;
            width: max-content;
            display: flex;
            align-items: center;
            padding: var(--padding);
            border-radius: 28px;
            background: white;
            transition: box-shadow 0.25s;
          }
          form p {
            text-align: center;
            font-size: 1.5rem;
            font-weight: 600;
            font-family: 'Poppins', sans-serif;
            color: #258d2a;
            margin-bottom: 25px;
          }
          .searching:focus-within {
            box-shadow: 0 0 8px #258d2a;
          }
          .search-input-home {
            font-size: 1rem;
            font-family: 'Poppins', sans-serif;
            color: black;
            margin-left: var(--padding);
            outline: none;
            border: none;
            background: transparent;
            width: 500px;
          }
          .material-symbols-outlined {
            color: #258d2a;
          }
          .search-input-home::placeholder
          .search-icon {
            color: rgba(0, 0, 0, 0.25);
          }
          .suggestions-search-home {
            position: absolute;
            top: 105%;
            left: 0;
            background-color: #fff;
            border: 1px solid #ddd;
            box-shadow: 0 0 8px #258d2a;
            border-radius: 20px;
            padding: 30px;
            width: 500px;
            max-height: 200px;
            overflow-y: auto;
          }
          .suggestions-search-home li {
            list-style-type: none;
            margin-bottom: 10px;
          }
          .suggestions-search-home a {
            text-decoration: none;
            color: #258d2a;
          }
          .suggestions-search-home a:hover {
            background-color: #f0f0f0;
          }
          .suggestions-search-home.hidden {
            display: none;
          }
        `}</style>
      </Helmet>
      <form>
        <div className="search-form">
          <p>You can discover more recipes and dishes.</p>
          <div className="searching">
            <span className="search-icon material-symbols-outlined">search</span>
            <input
              className="search-input-home"
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {showSuggestions && (
            <ul className="suggestions-search-home">
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
    </div>
  );
}

export default Search;
