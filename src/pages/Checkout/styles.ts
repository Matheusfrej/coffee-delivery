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

export const AddressAndPaymentContainer = styled.div`
  margin-top: 0.938rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const AddressContainer = styled.div`
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

export const CepInput = styled(BaseInput)`
  width: 12.5rem;
`

export const ComplementInput = styled(BaseInput)`
  flex: 1;
`

export const PaymentContainer = styled.div``

export const ConfirmationContainer = styled.div`
  width: 28rem;
`
