import * as React from 'react'
import {fireEvent, render} from 'react-testing-library'
import SelectField from '../SelectField'

describe('component: SelectField', () => {
  test('should trigger onChange if field is changed', () => {
    const handleChange = jest.fn()
    const props = {
      value: 'p2',
      onChange: handleChange,
      options: {p1: 'Product 1', p2: 'Product 2 ', p3: 'Product 3'}
    }

    const newValue = 'p3'
    const {container} = render(<SelectField {...props} />)

    let selectNode = container.querySelector('select') as HTMLSelectElement
    expect(selectNode.value).toBe(props.value)

    fireEvent.click(selectNode)
    fireEvent.change(selectNode, {target: {value: newValue}})

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(newValue)
  })
})
