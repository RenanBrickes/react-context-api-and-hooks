import { Button } from '../../componetes/Button';
import { Heading } from '../../componetes/Heading';
import { useCounterContext } from '../../context/CounterContext/index';
import Swal from 'sweetalert2'

export const App = () => {
  const [state, action] = useCounterContext();

  const handleErro = () => {
    action.asyncError()
      .then((r) => console.log(r))
      .catch((error) =>
        Swal.fire({
          title: 'Error!',
          text: `Um erro foi propositalmente gerado. => ${error}`,
          icon: 'error',
          confirmButtonText: 'Ok'
        }));
  }

  return <div>
    <Heading />
    <div className='container-button'>
      <Button estilo={"adicionar"} buttonClick={() => action.increase()}>Adicionar</Button>
      <Button estilo={"remover"} buttonClick={() => action.decrease()}>Remover</Button>
      <Button buttonClick={() => action.reset()}>Resetar</Button>
      <Button estilo={"adiciona10"} buttonClick={() => action.setMore(10)}>Adicionar + 10</Button>
      <Button estilo={"adiciona100"} buttonClick={() => action.setCounter({ counter: 100 })}>Adicionar 100</Button>
      <Button estilo={"adicionasync"} buttonClick={() => action.asyncIncrease()}>Adicionar asycn</Button>
      <Button estilo={"removerasyn"} buttonClick={handleErro}>Erro async</Button>
    </div>
  </div>
}

export default App; 