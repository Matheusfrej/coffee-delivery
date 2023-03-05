import styled from 'styled-components'

interface NumberInputContainerProps {
  height: number
}

export const NumberInputContainer = styled.form<NumberInputContainerProps>`
  display: flex;
  align-items: center;

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  span:nth-child(2) {
    svg {
      color: ${(props) => props.theme.purple};
      margin-left: calc(0px - 4rem);
      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }

  span:last-child {
    svg {
      color: ${(props) => props.theme.purple};
      margin-left: calc(0px - 1.375rem);
      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }

  input {
    width: 4.5rem;
    height: ${(props) => props.height}rem;
    border: none;
    border-radius: 6px;
    padding: 0.5rem;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-title']};
    text-align: center;
  }

  > span > svg {
    cursor: pointer;
  }
`
