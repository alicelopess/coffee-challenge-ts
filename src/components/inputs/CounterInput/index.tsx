import { Minus, Plus } from '@phosphor-icons/react'
import { CounterButton, CounterContainer } from './style'
import { useState } from 'react'

// interface CounterInputProps {
//   operation: 'increment' | 'decrement'
// }

export function CounterInput() {
  const [counterValue, setCountervalue] = useState(1)
  const handleIncrement = () => setCountervalue(counterValue + 1)
  const handleDecrement = () => setCountervalue(counterValue - 1)

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
      <input type="number" min={1} step={1} value={counterValue} />
      <CounterButton onClick={handleIncrement}>
        <Plus size={14} />
      </CounterButton>
    </CounterContainer>
  )
}
