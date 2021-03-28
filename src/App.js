import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import ParticleComponent from './components/ParticleComponent';

function App() {
  return (  
    <div
      className="App"
      style={{
        position: 'relative',
        height: '100%',
        width: '100%'
      }}
    >
      <ParticleComponent/>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
