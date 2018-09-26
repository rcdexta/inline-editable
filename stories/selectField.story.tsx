import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {SelectField} from '../src'

interface ITFState {
  value: string
}

interface ITFProps {
  value: string
  disabled?: boolean
}

class SelectFieldStory extends React.Component<ITFProps, ITFState> {
  state = {value: this.props.value}

  onChange = (value: string) => {
    this.setState({value: value})
  }

  render() {
    return (
      <div style={{margin: 50}}>
        <SelectField
          value={this.state.value}
          onChange={this.onChange}
          options={{p1: 'Product 1', p2: 'Product 2 ', p3: 'Product 3'}}
        />
      </div>
    )
  }
}

storiesOf('Inline Editable', module).add('SelectField', () => (
  <div style={{width: 300}}>
    <SelectFieldStory value={'p1'} />
  </div>
))
