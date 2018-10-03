import * as React from 'react'
import {SelectSpan, StyledSelect} from './styles/SelectField'

export interface ISelectFieldProps {
  value: string
  disabled?: boolean
  onChange(newValue: string)
  options: object
}

class SelectField extends React.Component<ISelectFieldProps, {}> {
  static defaultProps: Partial<ISelectFieldProps> = {
    disabled: false,
    onChange: () => {}
  }

  shouldComponentUpdate(nextProps: ISelectFieldProps) {
    return (
      nextProps.disabled !== this.props.disabled ||
      nextProps.value !== this.props.value ||
      nextProps.options !== this.props.options
    )
  }

  handleChange = evt => {
    this.props.onChange(evt.target.value)
  }

  render() {
    const {options, disabled, value} = this.props
    return (
      <SelectSpan>
        {options[value]}
        {!disabled && (
          <StyledSelect onChange={this.handleChange} value={value}>
            {Object.keys(options).map(key => {
              const val = options[key]
              return (
                <option value={key} key={key}>
                  {val}
                </option>
              )
            })}
          </StyledSelect>
        )}
      </SelectSpan>
    )
  }
}

export default SelectField
