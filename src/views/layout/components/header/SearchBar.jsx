import React, { useEffect } from 'react';

function SearchBar() {
    useEffect(() => {

        //Search Bar
        const handleSearchBarToggle = () => {
          const searchBar = document.querySelector('.search-bar');
          if (searchBar) {
            searchBar.classList.toggle('search-bar-show');
          }
        };
    
        const searchBarToggle = document.querySelector('.search-bar-toggle');
        if (searchBarToggle) {
          searchBarToggle.addEventListener('click', handleSearchBarToggle);
        }
    
        // Cleanup on unmount
        return () => {
          if (searchBarToggle) {
            searchBarToggle.removeEventListener('click', handleSearchBarToggle);
          }
          
        };
      }, []);

  return (
    <div className="search-bar">
        <form className="search-form d-flex align-items-center" method="POST" action="#">
          <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
          <button type="submit" title="Search"><i className="bi bi-search" /></button>
        </form>
    </div>
  )
}

export default SearchBar
