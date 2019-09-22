import styled from 'styled-components';

export default styled.div`
    display: flex;

    > * + * {
        margin-left: 20px;
    }

    &,
    & * {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
