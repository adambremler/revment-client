import React from 'react';
import NavSearchResult from './NavSearchResult';
import NavSearchCreateResult from './NavSearchCreateResult';

export default function NavSearchResultController({
    createNewResult,
    ...props
}) {
    if (createNewResult) {
        return <NavSearchCreateResult {...props} />;
    } else {
        return <NavSearchResult {...props} />;
    }
}
