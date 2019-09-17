import styled from 'styled-components';
import { CardContent } from 'semantic-ui-react';

export default styled(CardContent)`
    &&& {
        padding: ${({ topPadding }) => topPadding} 110px 0 0;
    }
`;
