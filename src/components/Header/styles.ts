import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 6.5rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    svg {
      color: ${(props) => props.theme.purple};
    }
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: ${(props) => props.theme['purple-dark']};
    background: ${(props) => props.theme['purple-light']};
    border-radius: 0.375rem;
  }

  > svg {
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.5rem;
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 0.375rem;
  }
`
