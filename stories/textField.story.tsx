import * as React from "react";
import { storiesOf } from "@storybook/react";
import TextField from "../src/TextField";

interface ITFState {
  text: string
}

interface ITFProps {
  text: string
  disabled?: boolean
}

class TextFieldStory extends React.Component<ITFProps, ITFState> {
  state = {text: this.props.text}

  onChange = (value: string) => {
    this.setState({text: value})
  }

  render() {
    return <TextField content={this.state.text} onChange={this.onChange} {...this.props} />
  }
}

storiesOf('Inline Editable', module).add('TextField', () => (
  <div style={{width: 300}}>

    <TextFieldStory text='This value can be changed inline' />

  </div>
))
