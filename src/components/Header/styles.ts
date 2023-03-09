import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 10rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
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
    line-height: 1.3;
  }

  a {
    line-height: 0;
  }
  a > svg {
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.5rem;
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 0.375rem;

    &:hover {
      cursor: pointer;
    }
  }

  > span {
    display: flex;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};
      width: 1.25rem;
      height: 1.25rem;
      line-height: 1;
      margin-top: calc(0px - 0.625rem);
      margin-left: calc(0px - 0.625rem);
      font-size: 0.75rem;
      font-weight: bold;
    }
  }
`
