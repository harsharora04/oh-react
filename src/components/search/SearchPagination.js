import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';

const ITEMS_COUNT = 5,
    PAGE_RANGE = 3;

function SearchPagination({ totalItemsCount,
    onPageChange,
    currentPage }) {
    return (<Pagination totalItemsCount={totalItemsCount}
        itemsCountPerPage={ITEMS_COUNT}
        hideFirstLastPages={false}
        innerClass="search__pagination"
        linkClass="search__pagination__link"
        itemClass="search__pagination__item"
        activeClass="search__pagination__item--active"
        hideDisabled={true}
        pageRangeDisplayed={PAGE_RANGE}
        onChange={(page) => onPageChange(page)}
        activePage={currentPage}/>)
};

SearchPagination.propTypes = {
    totalItemsCount: PropTypes.number,
    currentPage: PropTypes.number,
    onPageChange: PropTypes.func
}

export default SearchPagination;