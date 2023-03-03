import styled from 'styled-components'

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 34rem;
  background-size: 100%;
`

export const IntroMainContainer = styled(IntroContainer)`
  width: 100%;
  margin: 10rem;
`

export const TitleAndAdvantagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;
`

export const Titles = styled.div`
  width: 36.75rem;
  line-height: 1.3;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-weight: normal;
  }
`

export const Advantages = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 35.438rem;
  column-gap: 2.5rem;
  row-gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    svg {
      padding: 0.5rem;
      color: ${(props) => props.theme['base-background']};
      border-radius: 50%;
    }
  }

  div:nth-child(odd) {
    width: 14.438rem;
  }

  div:nth-child(even) {
    width: 18.375rem;
  }

  /* como cada icone tem uma cor,
  vou pegar separadamente eles dessa forma */
  div:nth-child(1) {
    svg {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }

  div:nth-child(2) {
    svg {
      background: ${(props) => props.theme['base-text']};
    }
  }

  div:nth-child(3) {
    svg {
      background: ${(props) => props.theme.yellow};
    }
  }

  div:nth-child(4) {
    svg {
      background: ${(props) => props.theme.purple};
    }
  }
`
