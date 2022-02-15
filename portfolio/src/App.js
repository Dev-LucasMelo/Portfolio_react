import './App.css';
import Navigate from './components/Navigate/navigate';
import Header from './components/header/header';
import Skills from './components/skills/skills';
import Identify from './components/identify/identify';
import Top from './components/to_top/top';

function App() {
  return (
    <div className="App">
      <Navigate />
      <Header />
      <Skills />
      <Identify />
      <Top />
    </div>
  );
}

export default App;
