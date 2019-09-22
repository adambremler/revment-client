import styled from 'styled-components';

export default styled.div`
    flex-grow: 1;
    padding: 8px 20px;

    input {
        width: 100%;
        background: ${({ theme }) => theme.input.bg} !important;
        border-radius: ${({ theme }) => theme.input.radius} !important;

        :focus {
            background: ${({ theme }) => theme.input.focus.bg} !important;
        }
    }

    .input,
    .results {
        width: 100% !important;
    }

    .results {
        max-width: 600px;
    }
`;
