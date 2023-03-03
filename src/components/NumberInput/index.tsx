import { Minus, Plus } from 'phosphor-react'
import { NumberInputContainer } from './styles'

interface NumberInputProps {
  height?: number
}

export function NumberInput({ height = 2 }: NumberInputProps) {
  return (
    <NumberInputContainer height={height}>
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
