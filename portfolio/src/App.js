import './App.css';
import Navigate from './components/Navigate/navigate';
import Header from './components/header/header';
import Skills from './components/skills/skills';
import Identify from './components/identify/identify';

function App() {
  return (
    <div className="App">
      <Navigate />
      <Header />
      <Skills />
      <Identify />
    </div>
  );
}

export default App;
