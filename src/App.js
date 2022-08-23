import './App.scss';
import { Screen } from './components/Screen/Screen';
import { Keyboard } from './components/Keyboard/Keyboard';
import { Controller } from  './components/Controller/Controller';

function App() {
  return (
    <div className="app">
      <div className="app--body">
        <Screen />
        <Controller />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
