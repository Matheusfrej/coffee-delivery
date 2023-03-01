import { Minus, Plus } from 'phosphor-react'
import { NumberInputContainer } from './styles'

export function NumberInput() {
  return (
    <NumberInputContainer>
      <input type="number" />
      <span>
        <Minus size={14} weight="bold" />
      </span>
      <span>
        <Plus size={14} weight="bold" />
      </span>
    </NumberInputContainer>
  )
}
