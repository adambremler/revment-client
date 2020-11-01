import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

export default styled(Icon)`
    color: ${({ active, down }) =>
        active ? (down ? '#82589f' : '#d95952') : 'rgba(0, 0, 0, 0.4)'};

    ${({ disabled }) => !disabled && `cursor: pointer`}

    padding: 0 5px 10px;
    border-radius: 5px;

    &&& {
        margin: -5px -5px 2px !important;
    }

    ${({ disabled }) =>
        !disabled &&
        `:hover {
        background-color: rgba(0, 0, 0, 0.06);
    }`}
`;
