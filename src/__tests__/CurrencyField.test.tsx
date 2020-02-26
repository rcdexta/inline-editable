import * as React from 'react'
import CurrencyField from '../CurrencyField'
import {fireEvent, render} from 'react-testing-library'

describe('component: CurrencyField', () => {
  test('should format currency as expected', () => {
    const handleChange = jest.fn()
    const props = {
      value: 200000,
      onChange: handleChange
    }

    const newValue = 10000

    const {container} = render(<CurrencyField {...props} />)

    let currencyNode = container.querySelector('[contenteditable=true]') as HTMLElement
    expect(currencyNode.textContent).toBe('$ 200,000')

    fireEvent.click(currencyNode)
    currencyNode.innerText = newValue.toString()
    fireEvent.blur(currencyNode)

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(newValue)
  })
})
