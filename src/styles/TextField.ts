import styled from 'react-emotion'

export const StyledView = styled('span')`
  &[contenteditable='true']:hover {
    border-bottom: 1px dashed #777;
    cursor: text;
  }

  &[contenteditable='false'] {
    opacity: 0.6;
  }

  &[contenteditable='false']:hover {
    cursor: not-allowed;
  }

  &[contenteditable='true']:focus {
    outline: none;
    border-bottom: 1px dashed #00aeed;
    background-color: cornsilk;
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
