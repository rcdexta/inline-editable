import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {TextField} from '../src'

interface ITFState {
  text: string
}

interface ITFProps {
  text: string
  autofocus?: boolean
  disabled?: boolean
}

class TextFieldStory extends React.Component<ITFProps, ITFState> {
  state = {text: this.props.text}

  onChange = (value: string) => {
    this.setState({text: value})
  }

  render() {
    return (
      <div style={{margin: 50}}>
        <TextField content={this.state.text} onChange={this.onChange} {...this.props} />
      </div>
    )
  }
}

storiesOf('Inline Editable', module).add('TextField', () => (
  <div style={{width: 500}}>
    <TextFieldStory text="Room addition Exterior shell: Second Story Flop. Or else there is no way to do that" />
    <TextFieldStory text="Also this value can be changed" />
    <TextFieldStory text="This field should be focussed automatically" autofocus />
    <TextFieldStory text={null} />
  </div>
))
