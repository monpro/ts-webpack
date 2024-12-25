import styled from 'styled-components';
import { HTMLAttributes } from 'react';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    $primary?: boolean;  // Using $ prefix to avoid DOM attribute warning
}

export const StyledButton = styled.button<ButtonProps>`
    background: ${props => props.$primary ? 'palevioletred' : 'white'};
    color: ${props => props.$primary ? 'white' : 'palevioletred'};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

export const Container = styled.div`
    padding: 20px;
`;