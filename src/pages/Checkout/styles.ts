import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  margin: 2.5rem 10rem;
  display: flex;
  gap: 2rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 1.125rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
  }
`

export const AddressAndPayment = styled.div`
  width: 40rem;

  @media (max-width: 768px) {
    width: 80%;
  }
`

export const BaseCardContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const AddressCardContainer = styled(BaseCardContainer)`
  margin-top: 0.938rem;
`

export const PaymentCardContainer = styled(BaseCardContainer)`
  margin-top: 0.75rem;
`

export const BaseCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  header {
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0.125rem;
      h3 {
        font-weight: normal;
        font-size: 1rem;
        color: ${(props) => props.theme['base-subtitle']};
      }

      h4 {
        font-weight: normal;
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};
      }
    }
  }
`

export const AddressContainer = styled(BaseCardHeader)``

export const PaymentContainer = styled(BaseCardHeader)`
  header svg {
    color: ${(props) => props.theme.purple};
  }
`

export const AddressFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  @media (max-width: 768px) {
    > div {
      display: flex;
      flex-direction: column;
    }

    > div:last-child {
      display: flex;
      flex-direction: row;

      input {
        width: 40%;
      }

      input:last-child {
        width: 20%;
      }
    }

    display: flex;
    flex-direction: column;
    input {
      width: 100%;
    }
  }
`

export const BaseInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 4px;
  font-size: 0.875rem;
  padding: 0.75rem;

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  :focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
    box-shadow: none;
    ::placeholder {
      color: transparent;
    }
  }
`

export const MediumInput = styled(BaseInput)`
  width: 12.5rem;
`

export const SmallInput = styled(BaseInput)`
  width: 3.75rem;
`

export const AdjustableInput = styled(BaseInput)`
  flex: 1;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const BaseButton = styled.button`
  display: flex;
  gap: 0.75rem;
  padding: calc(1rem - 1px);
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 6px;
  align-items: center;
  flex: 1;
  cursor: pointer;
  transition: background-color 0.1s;

  background: ${(props) => props.theme['base-button']};

  svg {
    color: ${(props) => props.theme.purple};
  }

  span {
    line-height: 1.6;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const BaseButtonSelected = styled(BaseButton)`
  border: 1px solid ${(props) => props.theme.purple};
`

export const CoffeesSelectedContainer = styled.div``

export const ConfirmationContainer = styled.div`
  width: 28rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${(props) => props.theme['base-card']};
  margin-top: 0.938rem;
  border-radius: 0.375rem 2.75rem;

  hr {
    border: 1px solid ${(props) => props.theme['base-button']};
  }

  > button {
    width: 100%;
    background: ${(props) => props.theme.yellow};
    font-weight: bold;
    line-height: 1.6;
    font-size: 0.875rem;
    color: ${(props) => props.theme.white};
    border: none;
    border-radius: 0.375rem;
    padding: 0.75rem 0.5rem;
    transition: background-color 0.1s;
    cursor: pointer;

    :not(:disabled):hover {
      background: ${(props) => props.theme['yellow-dark']};
    }

    :disabled {
      cursor: not-allowed;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: auto;
    margin-top: 1rem;
  }
`

export const CoffeeSelectionContainer = styled.div`
  padding: 0.5rem 0.25rem;

  display: flex;
  justify-content: space-between;

  > span {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`

export const CoffeeCard = styled.div`
  img {
    width: 4rem;
    height: 4rem;
  }
  display: flex;
  gap: 1.25rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    > span {
      color: ${(props) => props.theme['base-subtitle']};

      @media (max-width: 768px) {
        text-align: center;
      }
    }

    > div {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
    }
    > p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-label']};
      @media (max-width: 768px) {
        text-align: center;
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const DeleteButton = styled(BaseButton)`
  height: 2rem;
  padding: 0 0.5rem;
  &:hover {
    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;

    span {
      font-size: 1rem;
    }
  }

  div:last-child {
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: bold;
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

export const ComplementContainer = styled.div`
  flex: 1;
  width: 100%;

  span {
    color: ${(props) => props.theme['base-label']};
    font-style: italic;
    font-size: 0.75rem;
    max-width: fit-content;
    margin-left: calc(0px - 4.438rem);
    padding-right: 0.75rem;
  }
`
