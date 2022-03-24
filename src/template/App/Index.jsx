import { Button } from '../../componetes/Button';
import { Heading } from '../../componetes/heading';
import { useCounterContext } from '../../context/CounterContext/index'

export const App = () => {
  const [state, action] = useCounterContext();
  return <div>
    <Heading />
    <div>
      <Button buttonClick={() => action.increase()}>Incrementar</Button>
    </div>
  </div>
}

export default App; 