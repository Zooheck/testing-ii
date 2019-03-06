import React from 'react'
import { render } from 'react-testing-library'
import 'jest-dom/extend-expect'

import Display from './Display.js'

const stats = {
    balls: 1,
    strikes: 1
}

describe('<Display />', () => {
    it('balls display changes depending on state', () => {
        const { getByTestId } = render(<Display stats={stats}/>);
        const text = getByTestId('balls').textContent;
        expect(text).toEqual(`Balls: ${stats.balls}`)
    });
    it('strikes display changes depending on state', () => {
        const { getByTestId } = render(<Display stats={stats}/>);
        const text = getByTestId('strikes').textContent;
        expect(text).toEqual(`1`)
    });
})