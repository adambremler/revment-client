import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Search } from 'semantic-ui-react';
import { search } from '../../actions/searchActions';

import NavSearchWrapper from './styled/NavSearchWrapper';
import NavSearchResult from './NavSearchResult';
import { push } from 'connected-react-router';

function NavSearch({ results, isLoading, search, push }) {
    const [value, setValue] = useState('');
    const searchEl = useRef(null);

    const handleResultSelect = (e, { result }) => {
        setValue('');
        ReactDOM.findDOMNode(searchEl.current)
            .querySelector('input')
            .blur();
        push(`/urls/${result.id}`);
    };

    const handleSearchChange = (e, { value }) => {
        setValue(value);

        if (value.length > 0) {
            search(value);
        }
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
                        ? results.urls.map(u => ({
                              ...u,
                              key: u.id
                          }))
                        : []
                }
                resultRenderer={NavSearchResult}
                value={value}
            />
        </NavSearchWrapper>
    );
}

const mapStateToProps = state => ({
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
