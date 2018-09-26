import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {NumberField} from '../src'

interface ITFState {
  value: number
}

interface ITFProps {
  value: number
  disabled?: boolean
}

class NumberFieldStory extends React.Component<ITFProps, ITFState> {
  state = {value: this.props.value}

  onChange = (value: number) => {
    this.setState({value: value})
  }

  render() {
    return <NumberField value={this.state.value} disabled={this.props.disabled} onChange={this.onChange} />
  }
}

storiesOf('Inline Editable', module).add('NumberField', () => (
  <div style={{width: 300}}>
    <NumberFieldStory value={100} />
    <br />
    <br />
    <NumberFieldStory value={200} disabled />
  </div>
))
