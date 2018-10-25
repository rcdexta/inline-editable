import * as React from 'react'
import TextField, {TextFieldProps} from '../TextField'
import {cleanup, fireEvent, render} from 'react-testing-library'

afterEach(cleanup)

describe('component: TextField', () => {
  test('onChange should be triggered when content is changed', () => {
    const handleChange = jest.fn()
    const props: TextFieldProps = {
      content: 'I see you',
      onChange: handleChange
    }

    const newContent = 'I see you again'

    const {container} = render(<TextField {...props} />)

    let textNode = container.querySelector('[contenteditable=true]') as HTMLElement
    fireEvent.click(textNode)
    textNode.innerHTML = newContent
    fireEvent.blur(textNode)

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(newContent)
  })

  test('Should toggle between displayContent and content based on interaction', () => {
    const handleChange = jest.fn()
    const props: TextFieldProps = {
      content: 'I see you',
      displayContent: 'You see me',
      onChange: handleChange
    }

    const {container} = render(<TextField {...props} />)
    let textNode = container.querySelector('[contenteditable=true]') as HTMLElement
    expect(textNode.innerHTML).toBe(props.displayContent)

    fireEvent.click(textNode)
    expect(textNode.innerHTML).toBe(props.content)
  })

  test('Field should be focussed on mounting', () => {
    const props: TextFieldProps = {
      content: 'I see you',
      displayContent: 'You see me',
      autofocus: true
    }

    const {container} = render(<TextField {...props} />)
    expect(container.ownerDocument.activeElement.textContent).toBe(props.content)
  })
})
