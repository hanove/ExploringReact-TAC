import logo from './logo.svg';
import './App.css';
import Contador from './components/contador';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          <AppRoutes />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
