import styled from './styled-components'

export const SelectSpan = styled.span`
  border-bottom: 1px solid rgba(0, 0, 0, 0.33);
  overflow: hidden;
  padding-right: 1em;
  margin-right: 0.17em;
  cursor: pointer;
  position: relative;

  &::after {
    position: absolute;
    top: 50%;
    right: 0;
    display: block;
    content: '';
    height: 0;
    width: 0;
    border: 0.33em solid transparent;
    border-top: 0.33em solid rgba(0, 0, 0, 0.33);
    margin-top: -0.17em;
  }

  &.bright {
    &::after {
      border-top: 0.33em solid rgba(255, 255, 255, 0.33);
    }
  }
`

export const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  opacity: 0;
  z-index: 1;
`
