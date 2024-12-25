// src/components/StyledButton.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { StyledButton, Container } from '@components/StyledButton';

describe('StyledButton', () => {
    it('renders with correct styles', () => {
        const { container } = render(
            <Container>
                <StyledButton>Normal</StyledButton>
                <StyledButton $primary>Primary</StyledButton>
            </Container>
        );

        // Check container styles
        expect(container.firstChild).toHaveStyle('padding: 20px');

        const buttons = Array.from(container.getElementsByTagName('button'));
        const [normalButton, primaryButton] = buttons;

        expect(normalButton).toHaveStyle('background: white');
        expect(primaryButton).toHaveStyle('background: palevioletred');
    });
});
