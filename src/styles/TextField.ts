import styled from './styled-components'

export const StyledView = styled.span`
  &[contenteditable='true']:hover {
    border-bottom: 1px dashed #777;
    cursor: text;
  }

  &[contenteditable='false']:hover {
    cursor: not-allowed;
  }

  &[contenteditable='true']:focus {
    outline: none;
    border-bottom: 1px dashed #00aeed;
  }

  &:empty:focus {
    min-width: 5px;
    display: inline-block;
  }

  &:empty:not(:focus):before {
    content: attr(placeholder);
    color: #233040;
    opacity: 0.5;
  }
`
