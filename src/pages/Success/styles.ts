import styled from 'styled-components'

export const SuccessContainer = styled.div`
  margin: 5rem 10rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: bolder;
    font-size: 2rem;
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: normal;
    font-size: 1.25rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.75rem;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 2rem;
  }
`

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 32.875rem;
  height: 100%;
  padding: 2.5rem;

  // isso é uma estratégia pra borda com linear gradient funcionar
  // com border-radius
  background: linear-gradient(
        ${(props) => props.theme['base-background']},
        ${(props) => props.theme['base-background']}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
      )
      border-box;
  border-radius: 0.375rem 2.25rem;
  border: 1px solid transparent;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 0.5rem;
      color: ${(props) => props.theme['base-background']};
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;

      span {
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
  div:nth-child(1) {
    svg {
      background: ${(props) => props.theme.purple};
    }
  }

  div:nth-child(2) {
    svg {
      background: ${(props) => props.theme.yellow};
    }
  }

  div:nth-child(3) {
    svg {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
