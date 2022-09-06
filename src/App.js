import { useSelector } from 'react-redux';
import './App.css';
import { useDispatch } from 'react-redux';
import { incNumber } from './actions/index';
import {decNumber} from './actions/index'
function App() {
  const dispatch = useDispatch();
  const state =  useSelector(state=>state.upDownReducer);
  console.log(state)
  return (
 <>
 <div className='container'>
  <h1>Increment/Decrement counter</h1>
  <h4>using react and redux</h4>

  <div className='quantity'>
    <button className='quantity__minus' title='Decrement' onClick={()=>dispatch(incNumber(5))}><span>-</span> </button>
    <input name='quantity' type='text' className='quantity__input' value={state}/>
    <button className='quantity__plus' title='increment' onClick={()=>dispatch(decNumber(5))}><span>+</span></button>
  </div>

 </div>
 </>
  );
}

export default App;
