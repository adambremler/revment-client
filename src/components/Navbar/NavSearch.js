import React, { useState } from 'react';
import { Search } from 'semantic-ui-react';
import { debounce, escapeRegExp, filter, times } from 'lodash';
import faker from 'faker';

import NavSearchWrapper from './styled/NavSearchWrapper';

const initialState = { isLoading: false, results: [], value: '' };

const source = times(5, () => ({
    title: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: faker.finance.amount(0, 100, 2, '$')
}));

export default function NavSearch() {
    const [isLoading, setIsLoading] = useState(initialState.isLoading);
    const [results, setResults] = useState(initialState.results);
    const [value, setValue] = useState(initialState.value);

    const handleResultSelect = (e, { result }) => setValue(result.title);

    const handleSearchChange = (e, { value }) => {
        setIsLoading(true);
        setValue(value);

        setTimeout(() => {
            if (value.length < 1) {
                setIsLoading(initialState.isLoading);
                setResults(initialState.results);
                setValue(initialState.value);
                return;
            }

            const re = new RegExp(escapeRegExp(value), 'i');
            const isMatch = result => re.test(result.title);

            setIsLoading(false);
            setResults(filter(source, isMatch));
        }, 300);
    };

    return (
        <NavSearchWrapper>
            <Search
                placeholder="Search revment"
                input={{ iconPosition: 'left' }}
                loading={isLoading}
                onResultSelect={handleResultSelect}
                onSearchChange={debounce(handleSearchChange, 500, {
                    leading: true
                })}
                results={results}
                value={value}
            />
        </NavSearchWrapper>
    );
}
