import { useState } from 'react';
import Contador from './components/Contador/Contador';
import ContadorHooks from './components/ContadorHooks/ContadorHooks';

function App() {
  const [prendido, setPrendido] = useState(false)
  return (
    <div className="App">
      {/* <Contador initialValue={70} /> */}
      <button onClick={() => setPrendido(!prendido)}>Switch Component</button>
      {
        prendido && (
          <ContadorHooks initialValue={83} />
        )
      }
    </div>
  );
}

export default App;
