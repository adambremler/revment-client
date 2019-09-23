import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { Search } from 'semantic-ui-react';
import { search } from '../../actions/searchActions';
import NavSearchWrapper from './styled/NavSearchWrapper';
import { push } from 'connected-react-router';
import NavSearchResultController from './NavSearchResult/NavSearchResultController';
import useConstant from 'use-constant';

function NavSearch({ isQueryReachable, results, isLoading, search, push }) {
    const [value, setValue] = useState('');
    const searchEl = useRef(null);

    const searchValue = useConstant(() =>
        debounce(
            value => {
                if (value.length > 0) {
                    search(value);
                }
            },
            200,
            { leading: true }
        )
    );

    const handleSearchChange = (e, { value }) => {
        setValue(value);
        searchValue(value);
    };

    const handleResultSelect = (e, { result }) => {
        setValue('');
        ReactDOM.findDOMNode(searchEl.current)
            .querySelector('input')
            .blur();

        result.id ? push(`/urls/${result.id}`) : push(`/urls?u=${result.url}`);
    };

    return (
        <NavSearchWrapper>
            <Search
                ref={searchEl}
                placeholder="Search revment"
                input={{ iconPosition: 'left' }}
                loading={isLoading}
                onResultSelect={handleResultSelect}
                onSearchChange={handleSearchChange}
                results={
                    results
                        ? [
                              ...(isLoading ||
                              !isQueryReachable ||
                              results.urls.some(u => u.exactMatch)
                                  ? []
                                  : [{ createNewResult: true, url: value }]),
                              ...results.urls.map(u => ({
                                  ...u,
                                  key: u.id
                              }))
                          ]
                        : []
                }
                resultRenderer={NavSearchResultController}
                value={value}
            />
        </NavSearchWrapper>
    );
}

const mapStateToProps = state => ({
    isQueryReachable: state.search.isQueryReachable,
    results: state.search.results,
    isLoading: state.search.isLoading
});

const mapDispatchToProps = dispatch => ({
    search: query => dispatch(search(query)),
    push: path => dispatch(push(path))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavSearch);
