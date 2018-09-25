import * as React from "react";
import NumberField, { INumberFieldProps } from "./NumberField";

interface ICurrencyFieldProps extends INumberFieldProps {
}

export default class CurrencyField extends React.Component<ICurrencyFieldProps, {}> {
  static defaultProps: Partial<ICurrencyFieldProps> = {
    disabled: false
  }

  humanize = (money: number) => {
    let [dollar, cents] = (money || 0).toFixed(2).split('.')
    let value = (
      '$ ' +
      dollar
        .split('')
        .reverse()
        .reduce(function(acc, money, i) {
          return money + (i && !(i % 3) ? ',' : '') + acc
        }, '')
    )
    return `${value}.${cents}`
  }

  shouldComponentUpdate(nextProps: ICurrencyFieldProps) {
    return nextProps.value !== this.props.value || nextProps.disabled !== this.props.disabled
  }

  render() {
    const {value, disabled, onChange} = this.props
    return (
      <NumberField
        value={value}
        displayContent={this.humanize(value)}
        disabled={disabled}
        onChange={onChange}
      />
    )
  }
}
