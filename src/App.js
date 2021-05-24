import {BrowserRouter} from 'react-router-dom';
import Maincomponent from './Components/Maincomponent';
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
         <Maincomponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
