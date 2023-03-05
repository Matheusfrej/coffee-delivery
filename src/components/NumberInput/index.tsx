import { Minus, Plus } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { NumberInputContainer } from './styles'
interface NumberInputProps {
  height?: number
}

export function NumberInput({ height = 2 }: NumberInputProps) {
  const [quantity, setQuantity] = useState(1)

  const handleSubtractQuantity = () => {
    setQuantity((state) => {
      if (state > 1) {
        return state - 1
      }
      return state
    })
  }

  const handleIncreaseQuantity = () => {
    setQuantity((state) => {
      return state + 1
    })
  }

  const handleChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    setQuantity(+event.target.value)
  }

  const handleNumberInputSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <NumberInputContainer height={height} onSubmit={handleNumberInputSubmit}>
      <input
        type="number"
        id="quantity"
        min={1}
        value={quantity}
        onChange={handleChangeQuantity}
        required
      />
      <span onClick={handleSubtractQuantity}>
        <Minus size={14} weight="bold" />
      </span>
      <span onClick={handleIncreaseQuantity}>
        <Plus size={14} weight="bold" />
      </span>
    </NumberInputContainer>
  )
}
