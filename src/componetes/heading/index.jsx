import { useCounterContext } from '../../context/CounterContext/index';
import './style.css';
export const Heading = () => {
    const [state] = useCounterContext();
    return (
        <div>
            <div className='container'>
                <h1>Contador</h1>
                <div className='contador'>
                    <p>{state.counter}</p>
                </div>
            </div>
        </div>
    );
}
