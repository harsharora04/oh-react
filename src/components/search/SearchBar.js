import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineSearch,
    AiOutlineClose } from "react-icons/ai";


function SearchBar({ term,
    handleSearchChange,
    resetSearch }) {
    const handleChange = e => {
        handleSearchChange(e.target.value);
    }
    return (<div className="search__bar__container">
        <h1 className="search__bar__title">oh.search</h1>
        <form className="search__bar__form"
            onSubmit={e => e.preventDefault()}>
            <div className="search__bar__form__input__container">
                <AiOutlineSearch size={`20px`}
                    className="search__bar__form__icon" />
                <input type="text"
                    className="search__bar__form__input"
                    autoFocus={true}
                    value={term}
                    onChange={handleChange}
                    placeholder="Search..." />
            </div>
            {
                term && <button type="button"
                    className="search__bar__form__cancel"
                    onClick={resetSearch}>
                    <AiOutlineClose className="search__bar__form__icon" />
                </button>
            }
        </form>
        </div>)
};

SearchBar.propTypes = {
    term: PropTypes.string,
    handleSearchChange: PropTypes.func,
    resetSearch: PropTypes.func
}

export default SearchBar;