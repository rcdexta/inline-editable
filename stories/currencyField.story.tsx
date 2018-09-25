import * as React from "react";
import { storiesOf } from "@storybook/react";
import CurrencyField from "../src/CurrencyField";

interface ICFState {
  value: number
}

interface ICFProps {
  value: number
  disabled?: boolean
}

class CurrencyFieldStory extends React.Component<ICFProps, ICFState> {
  state = {value: this.props.value}

  onChange = (value: number) => {
    this.setState({value: value})
  }

  render() {
    return <CurrencyField value={this.state.value} disabled={this.props.disabled} onChange={this.onChange} />
  }
}

storiesOf('Inline Editable', module).add('CurrencyField', () => (
  <div style={{width: 300}}>
    <CurrencyFieldStory value={1000} />
    <br />
    <br />
    <CurrencyFieldStory value={200000} disabled />
  </div>
))
