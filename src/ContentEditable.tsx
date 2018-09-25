import React from "react";
import { StyledView } from "./styles/TextField";

export interface IContentEditableProps {
  content: string
  disabled: boolean
  onChange(newValue: string)
  displayContent?: string
  onKeyDown?: (event: React.KeyboardEvent) => void
  onKeyPress?: (event: React.KeyboardEvent) => void
}

export interface IContentEditableState {
  editing: boolean
}

class ContentEditable extends React.Component<IContentEditableProps, {}> {
  static defaultProps: Partial<IContentEditableProps> = {
    disabled: false,
    onKeyDown: () => {},
    onKeyPress: () => {}
  }

  state = {editing: false}

  private elem: HTMLDivElement | null

  shouldComponentUpdate(nextProps: IContentEditableProps, nextState: IContentEditableState) {
    return (
      nextProps.content !== this.props.content ||
      nextProps.disabled !== this.props.disabled ||
      nextState.editing !== this.state.editing
    )
  }

  selectAll = () => {
    let sel, range
    if (window.getSelection && document.createRange) {
      range = document.createRange()
      range.selectNodeContents(this.elem)
      sel = window.getSelection()
      sel.removeAllRanges()
      sel.addRange(range)
    }
  }

  handleKeyDown = (evt: React.KeyboardEvent) => {
    //exit edit mode on escape key
    if (evt.key === 'Escape') {
      evt.preventDefault()
      this.elem.blur()
    }
  }

  finishEditing = () => {
    const newValue = this.elem && this.elem.innerHTML
    this.setState({editing: false})
    this.props.onChange(newValue)
  }

  startEditing = () => {
    const {disabled} = this.props
    !disabled && this.setState({editing: true}, () => this.selectAll())
  }

  content = (): string => {
    const {content, displayContent} = this.props
    return this.state.editing ? content : displayContent ? displayContent : content
  }

  render() {
    const {disabled, onKeyPress} = this.props
    return <StyledView
      suppressContentEditableWarning
      innerRef={elem => (this.elem = elem)}
      contentEditable={!disabled}
      dangerouslySetInnerHTML={{__html: this.content()}}
      onClick={this.startEditing}
      onBlur={this.finishEditing}
      onKeyDown={this.handleKeyDown}
      onKeyPress={onKeyPress}
    />
  }
}

export default ContentEditable
