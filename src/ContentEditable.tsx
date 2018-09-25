import React from "react";
import { StyledView } from "./styles/TextField";

export interface IContentEditableProps {
  content: string
  disabled: boolean
  onChange(newValue: string)
  onKeyDown?: (event: React.KeyboardEvent) => void
  onKeyPress?: (event: React.KeyboardEvent) => void
  renderView?: (node: React.ReactNode)  => JSX.Element
}

class ContentEditable extends React.Component<IContentEditableProps, {}> {
  static defaultProps: Partial<IContentEditableProps> = {
    disabled: false,
    onKeyDown: () => {},
    onKeyPress: () => {}
  }

  private elem: HTMLDivElement | null

  shouldComponentUpdate(nextProps: IContentEditableProps) {
    return nextProps.content !== this.props.content || nextProps.disabled !== this.props.disabled
  }

  handleKeyDown = (evt: React.KeyboardEvent) => {
    //exit edit mode on escape key
    if (evt.key === 'Escape') {
      evt.preventDefault()
      this.elem.blur()
    }
  }

  finishEditing = () => {
    const newValue = this.elem && this.elem.innerText
    this.props.onChange(newValue)
  }

  render() {
    const {renderView, content, disabled, onKeyPress} = this.props
    let contentEditableNode = <StyledView
      suppressContentEditableWarning
      innerRef={elem => (this.elem = elem)}
      contentEditable={!disabled}
      dangerouslySetInnerHTML={{__html: content}}
      onBlur={this.finishEditing}
      onKeyDown={this.handleKeyDown}
      onKeyPress={onKeyPress}
    />;
    return (
      renderView ? renderView(contentEditableNode) : contentEditableNode
    )
  }
}

export default ContentEditable
