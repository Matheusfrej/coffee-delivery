import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin: 2.5rem 10rem;
  display: flex;
  gap: 2rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 1.125rem;
  }
`

export const AddressAndPayment = styled.div`
  width: 40rem;
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

export const AddressFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
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

export const ConfirmationContainer = styled.div`
  width: 28rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const BaseButton = styled.button`
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  border: none;
  border-radius: 6px;
  align-items: center;
  flex: 1;

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
