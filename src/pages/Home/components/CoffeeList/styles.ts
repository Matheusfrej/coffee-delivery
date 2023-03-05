import styled from 'styled-components'

export const CoffeeListContainer = styled.div`
  margin: 0 10rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  strong {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
  }
  > strong {
    font-weight: bolder;
    font-size: 2rem;
  }
`
export const CoffeeCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 2.5rem;
  grid-column-gap: 2rem;
`

export const Card = styled.div`
  width: 16rem;
  /* height: 19.375rem; */
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.063rem;

  img {
    margin-top: calc(0px - 1.25rem);
  }
`

export const CardHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;
    gap: 0.25rem;
  }

  li {
    font-size: 0.625rem;
    font-weight: bold;
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    margin-top: 0.75rem;

    background: ${(props) => props.theme['yellow-light']};
  }

  strong {
    margin: 0 1.25rem;
    margin-top: 1rem;
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    margin-top: 0.5rem;

    padding: 0 1.25rem;
  }
`

export const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 1.5rem 1.25rem 1.5rem;
  width: 13rem;

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
  }
  strong {
    font-size: 1.5rem;
  }
`

export const Actions = styled.form`
  display: flex;
  gap: 0.5rem;

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  div {
    display: flex;
    align-items: center;
  }

  input {
    /* flex: 1; */
    width: 4.5rem;
    border: none;
    border-radius: 6px;
    padding: 0.5rem;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-title']};
    text-align: center;
  }

  button {
    border: none;
    line-height: 0;
  }

  > button > svg {
    padding: 0.5rem;
    color: ${(props) => props.theme['base-card']};
    background: ${(props) => props.theme['purple-dark']};
    border-radius: 6px;
    cursor: pointer;

    transition: background-color 0.1s;

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`
