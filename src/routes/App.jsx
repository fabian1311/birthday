import Home from '../page/Home';
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from '../page/Dashboard';
import Letter from '../page/Letter';
import Game from '../page/Game';
import Construction from '../page/Construction';

function App() {
  return(
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />}/>
                <Route path="/dashboard" element={<Dashboard />}/> 
                <Route path="/letter" element ={<Letter />}/>
                <Route path="/game" element = {<Game />} />
                <Route path='/await' element = {<Construction />}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
