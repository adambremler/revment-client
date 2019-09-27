import styled from 'styled-components';
import { Label } from 'semantic-ui-react';

export default styled(Label)`
    margin: 5px 0 0 0 !important;

    & + & {
        margin-left: 7px !important;
    }
`;
