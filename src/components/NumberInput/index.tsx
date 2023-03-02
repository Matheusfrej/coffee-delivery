import { Minus, Plus } from 'phosphor-react'
import { NumberInputContainer } from './styles'

interface NumberInputProps {
  height: number
}

export function NumberInput({ height }: NumberInputProps) {
  return (
    <NumberInputContainer>
      <input type="number" style={{ height }} />
      <span>
        <Minus size={14} weight="bold" />
      </span>
      <span>
        <Plus size={14} weight="bold" />
      </span>
    </NumberInputContainer>
  )
}
