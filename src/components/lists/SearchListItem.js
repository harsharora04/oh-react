import React from 'react';
import PropTypes from 'prop-types';

function SearchListItem({ item }) {
    if (!item) return;
    const { title,
        link,
        snippet,
        displayLink,
        pagemap
        } = item,
        thumbnail = pagemap
            && pagemap.cse_thumbnail
            && pagemap.cse_thumbnail.length
            ? pagemap.cse_thumbnail[0].src
            : null;
    return (<li>
        <a href={link}
            className="search__list__item"
            target="_blank"
            rel="noopener noreferrer">
            <div className={`search__list__icon
                ${!thumbnail ? 'search__list__icon--empty' : ''}`}>
                { thumbnail && <img src={thumbnail}
                    alt={title} />  }
            </div>
            <div>
                <p className="search__list__text search__list__text--helper">{displayLink}</p>
                <p className="search__list__title">{title}</p>
                <p className="search__list__text">{snippet}</p>
            </div>
        </a>
    </li>);
};

SearchListItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default SearchListItem;