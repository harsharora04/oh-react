import React from 'react';
import PropTypes from 'prop-types';
import SearchListItem from './SearchListItem';

function SearchList({ items }) {
    const itemsList = items.map((item) => <SearchListItem item={item}
        key={item.cacheId} />)
    return (<ul className="search__list">{itemsList}</ul>);
};

SearchList.propTypes = {
    items: PropTypes.array
}

export default SearchList;