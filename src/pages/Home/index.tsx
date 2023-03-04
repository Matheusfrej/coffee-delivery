import { CoffeeList } from './components/CoffeeList'
import { Intro } from './components/Intro'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { HomeContainer } from './styles'

const newItemCartFormValidationSchema = zod.object({
  quantity: zod.number().min(1),
})

type NewItemCartFormData = zod.infer<typeof newItemCartFormValidationSchema>

export function Home() {
  const newNewItemCartForm = useForm<NewItemCartFormData>({
    resolver: zodResolver(newItemCartFormValidationSchema),
    defaultValues: {
      quantity: 1,
    },
  })

  const { handleSubmit, reset } = newNewItemCartForm

  const handleAddItemToCart = (
    coffeeId: string,
    data: NewItemCartFormData,
  ) => {}

  return (
    <HomeContainer>
      <Intro />
      <CoffeeList />
    </HomeContainer>
  )
}
