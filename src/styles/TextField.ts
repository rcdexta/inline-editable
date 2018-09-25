import styled from './styled-components'

export const StyledView = styled.span`
  font-size: 13px;
  font-family: sans-serif;

  &[contenteditable=true]:hover {
    border-bottom: 1px dashed #777;
  }
  
  &[contenteditable=false]:hover {
    cursor: not-allowed;
  }

  &[contenteditable=true]:focus {
    outline: none;
    border-bottom: 1px dashed #00aeed;
  }

  &:empty:not(:focus):before {
    content: attr(placeholder);
    color: gray;
  }
`
