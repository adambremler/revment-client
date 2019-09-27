import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

export default styled(Icon)`
    color: ${({ active }) => (active ? '#d95952' : 'rgba(0, 0, 0, 0.4)')};
    cursor: pointer;
    padding: 0 5px 10px;
    border-radius: 5px;

    &&& {
        margin: -5px -5px 2px !important;
    }

    :hover {
        background-color: rgba(0, 0, 0, 0.06);
    }
`;

//#d95952
