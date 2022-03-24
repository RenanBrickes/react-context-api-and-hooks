import { Button } from '../../componetes/Button';
import { Heading } from '../../componetes/heading';
import { useCounterContext } from '../../context/CounterContext/index'

export const App = () => {
  const [state, action] = useCounterContext();

  const handleErro = () => {
    action.asyncError()
    .then((r) => console.log(r))
    .catch((error) => console.log("O erro foi gerado => " + error));
  }

  return <div>
    <Heading />
    <div>
      <Button buttonClick={() => action.increase()}>Adicionar</Button>
      <Button buttonClick={() => action.decrease()}>Remover</Button>
      <Button buttonClick={() => action.reset()}>Reset</Button>
      <Button buttonClick={() => action.setMore(10)}>Adicionar + 10</Button>
      <Button buttonClick={() => action.setCounter({ counter: 100 })}>Adicionar 100</Button>
      <Button buttonClick={() => action.asyncIncrease()}>asyncIncrease</Button>
      <Button buttonClick={handleErro}>asyncError  </Button>
    </div>
  </div>
}

export default App; 