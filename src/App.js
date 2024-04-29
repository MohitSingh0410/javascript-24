import logo from './logo.svg';
import './App.css';
import Recursion from './Components/Recursion/Recursion';
import Loop from './Components/LoopingChildren/Loop';
import Functionlooping from './Components/FunctionLooping/Functionlooping';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <Recursion/> */}
       {/* <Loop/> */}
       <Functionlooping/>
      </header>
    </div>
  );
}

export default App;
