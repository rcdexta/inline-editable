import ContentEditable from "./ContentEditable";
import * as React from "react";

export interface INumberFieldProps {
  value: number
  disabled: boolean
  onChange(newValue: number)
  renderView?: (node: React.ReactNode)  => JSX.Element
}

export default class NumberField extends React.Component<INumberFieldProps, {}> {
  static defaultProps: Partial<INumberFieldProps> = {
    disabled: false
  }

  shouldComponentUpdate(nextProps: INumberFieldProps) {
    return nextProps.value !== this.props.value || nextProps.disabled !== this.props.disabled
  }

  handleKeyPress = (e: React.KeyboardEvent) => {
    if (
      String.fromCharCode(e.which) !== '-' &&
      String.fromCharCode(e.which) !== '.' &&
      isNaN(Number(String.fromCharCode(e.which)))
    ) {
      e.preventDefault()
    }
  }

  onChange = (newContent: string) => {
    const newValue = Number(newContent)
    this.props.onChange(newValue)
  }

  content = () => {
    return this.props.value.toString()
  }

  render() {
    const {disabled, renderView} = this.props
    return (
      <ContentEditable
        content={this.content()}
        disabled={disabled}
        onChange={this.onChange}
        onKeyPress={this.handleKeyPress}
        renderView={renderView}
      />
    )
  }
}
