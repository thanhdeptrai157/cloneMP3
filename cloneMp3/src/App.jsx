
import { useDispatch } from 'react-redux'
import './App.css'
import Home from './component/Home'
import { useEffect } from 'react'
import * as actions from './store/actions/function'
function App() {


const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actions.getHome());
  }, [])
  return (
    <>
      <Home />
    </>
  )
}

export default App
