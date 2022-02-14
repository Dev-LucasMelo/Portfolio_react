import './App.css';
import Navigate from './components/Navigate/navigate';
import Header from './components/header/header';
import Skills from './components/skills/skills';

function App() {
  return (
    <div className="App">
      <Navigate />
      <Header />
      <Skills />
    </div>
  );
}

export default App;
