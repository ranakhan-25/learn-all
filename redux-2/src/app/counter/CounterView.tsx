
import { useSelector } from 'react-redux'
import IncrementCount from '../../components/IncrementCount';
import IncrementByFive from '../../components/IncrementByFive';
import DecrementCount from '../../components/DecrementCount';
import ResetCount from '../../components/ResetCount';

interface State {
  counter: {
    count: number;
  }
}
const CounterView = () => {
  const count = useSelector((state:State)=> state.counter.count)
  return (
    <div>
      Count: {count}
      <div className='flex gap-4'> 
        <IncrementCount/>
        <IncrementByFive/>
        <DecrementCount/>
        <ResetCount/>
      </div>
    </div>
  )
}

export default CounterView