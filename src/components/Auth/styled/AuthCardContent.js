import styled from 'styled-components';
import { CardContent } from 'semantic-ui-react';

export default styled(CardContent)`
    &&& {
        padding: ${({ topPadding }) => topPadding} 110px 0 0;

        @media only screen and (max-width: 767px) {
            padding: 30px 20px 60px;

            h1 {
                text-align: center;
            }
        }
    }
`;
