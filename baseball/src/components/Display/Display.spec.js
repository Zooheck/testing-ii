import React from 'react'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Display from './Display'

describe('<Display />', () => {
    it('should show "strikes:"', () => {
        const { getByText } = render(<Display stats={{balls: 0, strikes: 0}}/>);

        expect(getByText(/strikes:/i)).toBeInTheDocument()
    });
    it('should show "balls:"', () => {
        const { getByText } = render(<Display stats={{balls: 0, strikes: 0}}/>);

        expect(getByText(/balls:/i)).toBeInTheDocument()
    });
})