import './App.css';
import Body from './components/body.tsx';
import Navbar from './components/navbar.tsx';
function App() {
  return (
    <div className="App bg-burger bg-cover bg-center h-full">
      <Navbar/>
      <Body/>
    </div>
  );
}

export default App;
