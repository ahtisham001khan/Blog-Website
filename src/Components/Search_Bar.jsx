// Search_Bar.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search_Bar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const posts = [
    'How to Start Freelancing in 2025',
    '10 JavaScript Tricks for Beginners',
    'Exploring the Future of AI',
    'Top Places to Visit in Pakistan',
    'Boost Your Productivity with These Tips',
    'Learning React for Web Development',
    'Building Your First Portfolio Website',
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === '') {
      setResults([]);
    } else {
      const filtered = posts.filter((post) =>
        post.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    }
  };

  return (
    <div className="position-relative" style={{ maxWidth: '320px' }}>
      <div className="input-group">
        <span className="input-group-text">🔍</span>
        <input
          type="text"
          className="form-control"
          placeholder="Search articles..."
          value={query}
          onChange={handleSearch}
        />
      </div>

      {query && (
        <ul
          className="list-group position-absolute w-100 mt-1 shadow-sm"
          style={{
            zIndex: 999,
            maxHeight: '200px',
            overflowY: 'auto',
            borderRadius: '8px',
          }}
        >
          {results.length === 0 ? (
            <li className="list-group-item text-muted">No results found</li>
          ) : (
            results.map((item, index) => (
              <li key={index} className="list-group-item">
                {item}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Search_Bar;
