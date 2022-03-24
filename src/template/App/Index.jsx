import { useEffect } from 'react';
import { useCounterContext } from '../../context/CounterContext/index'

export const App = () => {
  const [state, action] = useCounterContext();

  useEffect(() => {
    action.increase();
  }, [action])

  return <div>
    <button onClick={() => action.increase()} >INCREMENTE</button>
  </div>
}

export default App; 