// src/components/MyComponent.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import  ImageComponent  from '@components/ImageComponent';

describe('MyComponent', () => {
    it('renders images with correct src attributes', () => {
        const { getAllByRole } = render(<ImageComponent />);

        // Get all images
        const images = getAllByRole('img');

        // Should have 3 images
        expect(images).toHaveLength(3);

        // Check alt texts
        expect(images[0]).toHaveAttribute('alt', 'Logo');
        expect(images[1]).toHaveAttribute('alt', 'Icon');
        expect(images[2]).toHaveAttribute('alt', 'Photo');

        // Check that src attributes exist
        images.forEach(img => {
            expect(img).toHaveAttribute('src');
        });
    });
});