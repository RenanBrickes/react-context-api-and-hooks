import { useCounterContext } from '../../context/CounterContext/index'
export const Heading = () => {
    const [state] = useCounterContext();
    return (
        <h1>{state.counter}</h1>
    );
}
