import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import foodsData from '../data/foods';
import { Link } from 'react-router-dom';

function SearchRecipes() {
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
                    .form-search {
                        position: absolute;
                        margin-top: 40rem;
                        margin-left: 1rem;
                    
                    }
                    .search {
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
                    .search:focus-within {
                        box-shadow: 0 5px 25px #258d2a;
                    }
                    .search-input {
                        font-size: 1rem;
                        font-family: 'Poppins', sans-serif;
                        color: black;
                        margin-left: var(--padding);
                        outline: none;
                        border: none;
                        background: transparent;
                        width: 700px;
                    }
                    .search-suggestions {
                        position: absolute;
                        top: 105%;
                        left: 0;
                        background-color: #fff;
                        border: 1px solid #ddd;
                        box-shadow: 0 0 15px #258d2a;
                        border-radius: 20px;
                        padding: 30px;
                        width: 680px;
                        max-height: 200px;
                        overflow-y: auto;
                    }
                    .search-suggestions li {
                        list-style-type: none;
                        margin-bottom: 10px;
                    }
                    .search-suggestions a {
                        text-decoration: none;
                        color: #258d2a;
                    }
                    .search-suggestions a:hover {
                        background-color: #f0f0f0;
                    }
                    .search-suggestions.hidden {
                        display: none;
                    }
                `}</style>
            </Helmet>
            <form>
                <div className="form-search">
                    <p>You can search anytime and discover more recipes and dishes.</p>
                    <div className="search">
                    <input
                        className="search-input"
                        type="search"
                        placeholder="Click Here to Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    </div>
            
                    {showSuggestions && (
                    <ul className="search-suggestions">
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
    
export default SearchRecipes;
    