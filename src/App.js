import { useEffect,
  useState,
  useRef } from 'react';
import { searchViaTerm,
  searchViaTermCancelToken } from './actions/search';
import debounce from 'lodash.debounce';
import SearchList from './components/lists/SearchList';
import SearchBar from './components/search/SearchBar';
import SearchPagination from './components/search/SearchPagination';
import './App.scss';

function App() {
  const [q, setQ] = useState(''),
    [currentPage, setCurrentPage] = useState(1),
    [fetching, setFetching] = useState(false),
    [searchData, setSearchData] = useState(null),
    countOfItemsPerPage = 5,
    debouncedSearch = useRef(debounce((params) => search(params), 500)).current; // debouncing input

  // function to reset search
  const resetSearch = () => {
    setQ('');
    setSearchData(null);
    setCurrentPage(1);
  }

  // function to search
  const search = (params) => {
    if (fetching) return;
    setFetching(true);
    searchViaTerm(params)
    .then(_ => {
      setFetching(false);
      if (_) {
        setSearchData(_);
      }
    })
  }

  useEffect(() => {
    if (q) {
      const params = {
        q,
        num: countOfItemsPerPage,
        start: currentPage  === 1
          ? currentPage
          : (countOfItemsPerPage * currentPage + 1)
      }
      debouncedSearch(params);
    }
    return () => {
      if (searchViaTermCancelToken) searchViaTermCancelToken();
    }
  }, [q,
    currentPage,
    debouncedSearch]);

  return (
    <div className="App">
        <SearchBar term={q}
          resetSearch={resetSearch}
          handleSearchChange={(val) => setQ(val)} />
      {
        searchData
        && <div>
            <SearchList items={searchData.items || []} />
            <SearchPagination totalItemsCount={Number(searchData.searchInformation.totalResults)}
              currentPage={currentPage}
              onPageChange={(page) => {
                if (fetching) return;
                  setCurrentPage(page);
              }} />
          </div>
      }
    </div>
  );
}

export default App;
