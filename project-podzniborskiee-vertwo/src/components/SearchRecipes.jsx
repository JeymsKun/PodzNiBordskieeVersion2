import React, { useState, useEffect } from 'react';
import '../css/recipes-style.css';
import '../css/recipes-responsive.css';
import '../App.css';
// import '../../../foodDetails';
import foodsData from '../data/foods';

function Search() {
    const [searchTerm, setSearchTerm] = useState('');
 
    const [suggestions, setSuggestions] = useState([]);
    
    const [showSuggestions, setShowSuggestions] = useState(false);

   
    useEffect(() => {
        if (searchTerm.trim().length > 0) {
            setShowSuggestions(true);
            const filteredSuggestions = foodsData.filter(food =>
                food.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSuggestions(filteredSuggestions.length > 0 ? filteredSuggestions : [{ name: 'No results found' }]);
        } else {
            setShowSuggestions(false);
        }
    }, [searchTerm]);

    return (
        <form>
            <div className="form-search">
                <p>You can discover more recipes and dishes.</p>

                <div className="search">
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
                    <ul className="search-suggestions">
                        {suggestions.map((suggestion, index) => (
                            <li key={index}>
                                <a href={`foodDetails.jsx?id=${suggestion.id}`} data-food-id={suggestion.id}>
                                    {suggestion.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </form>
    );
}

export default Search;
