import './App.css';
import Create from './crud operation/Create';
import Update from './crud operation/Update';
import Read from './crud operation/Read';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
    
function App() {
  return(
    <div className='Main'>
      <h1>CRUD operation</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/create" element={<Create/>}/>
        <Route path="/read" element={<Read/>}/>
        <Route path="/update" element={<Update/>}/>
      </Routes>
      </BrowserRouter>
  </div>);
}


export default App;
