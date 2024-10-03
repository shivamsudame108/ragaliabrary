import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`/api/raga/search?term=${searchTerm}`);
            setResult(response.data);
        } catch (error) {
            setResult(null);
            alert('Search failed');
        }
    };

    return (
        <div>
            <h2>Search Raga</h2>
            <input 
                type="text" 
                placeholder="Enter raga notes" 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)} 
            />
            <button onClick={handleSearch}>Search Raga</button>
            {result && (
                <div>
                    <h3>{result.name}</h3>
                    <p>{result.description}</p>
                </div>
            )}
        </div>
    );
};

export default Search;
