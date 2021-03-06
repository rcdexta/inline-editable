import styled from 'react-emotion'

export const SelectSpan = styled('span')`
  padding-right: 1em;
  margin-right: 0.17em;
  cursor: pointer;
  position: relative;

  &::after {
    position: absolute;
    top: 50%;
    right: 0;
    cursor: pointer;
    display: block;
    content: '';
    height: 0;
    width: 0;
    border: 0.33em solid transparent;
    border-top: 0.33em solid rgba(0, 0, 0, 0.33);
    margin-top: -0.17em;
  }

  &:focus {
    border-bottom: 1px dashed #00aeed;
  }

  &.bright {
    &::after {
      border-top: 0.33em solid rgba(255, 255, 255, 0.33);
    }
  }
`

export const StyledSelect = styled('select')`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 1;

  &:focus {
    background-color: ivory;
  }
`
