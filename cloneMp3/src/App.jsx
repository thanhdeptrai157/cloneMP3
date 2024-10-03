
import { useDispatch } from 'react-redux'
import './App.css'
import Home from './routes/Home'
import { useEffect } from 'react'
import * as actions from './store/actions/home'
import { Router, Route, Routes } from 'react-router-dom'
import Default from './routes/Default'
import Album from './routes/Album'
import PATH from './utils/path'


function App() {

const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(actions.getHome());
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element= {<Default />}>
            <Route path={PATH.HOME} element = {<Home />}></Route>
            <Route path={PATH.ALBUM} element = {<Album />}></Route>
        </Route>
      </Routes>

    </div>
  )
}

export default App
