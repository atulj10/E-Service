import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { faHome } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      E Services
      <FontAwesomeIcon icon={faHome}/>
      <button className='btn btn-outline-dark'>Click</button>
    </div>
  );
}

export default App;
