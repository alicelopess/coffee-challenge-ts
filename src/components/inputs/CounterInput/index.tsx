import { Minus, Plus } from '@phosphor-icons/react'
import { CounterButton, CounterContainer } from './style'
// import { useState } from 'react'

interface CounterInputProps {
  inputValue: number
  handleIncrement: () => void
  handleDecrement: () => void
  handleManualChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function CounterInput({
  inputValue: counterValue,
  handleIncrement,
  handleDecrement,
  handleManualChange,
}: CounterInputProps) {
  // const [counterValue, setCountervalue] = useState(1)
  // const handleIncrement = () => setCountervalue(counterValue + 1)
  // const handleDecrement = () => setCountervalue(counterValue - 1)

  return (
    <CounterContainer>
      <CounterButton
        onClick={() => {
          if (counterValue > 1) {
            handleDecrement()
          }
        }}
      >
        <Minus size={14} />
      </CounterButton>
      <input
        type="number"
        min={1}
        step={1}
        value={counterValue}
        onChange={handleManualChange}
      />
      <CounterButton onClick={handleIncrement}>
        <Plus size={14} />
      </CounterButton>
    </CounterContainer>
  )
}
