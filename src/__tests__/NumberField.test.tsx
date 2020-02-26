import * as React from 'react'
import NumberField from '../NumberField'
import {fireEvent, render} from 'react-testing-library'

describe('component: NumberField', () => {
  test('onChange should be triggered when number is changed', () => {
    const handleChange = jest.fn()
    const props = {
      value: 10,
      onChange: handleChange
    }

    const newValue = 10

    const {container} = render(<NumberField {...props} />)

    let numberNode = container.querySelector('[contenteditable=true]') as HTMLElement
    fireEvent.click(numberNode)
    numberNode.innerText = newValue.toString()
    fireEvent.blur(numberNode)

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(newValue)
  })
})
