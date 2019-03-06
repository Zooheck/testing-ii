import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Dashboard from './Dashboard.js'
import Display from '../Display/Display.js'

const stats = {
    balls: 0, 
    strikes: 0
}
describe('<Dashboard />', () => {
    it('should increment strike values', () => {
        const { getByText } = render(<Dashboard />)
        const { getByTestId } = render(<Display stats={stats}/>)
        const strikeButton = getByText(/Strike/i)
        let strikeValue = getByTestId('strikes')
        fireEvent.click(strikeButton)
        expect(strikeValue.textContent).toEqual('1')
        fireEvent.click(strikeButton)
        expect(strikeValue.textContent).toEqual('2')
       
    });
})