import './App.css';
import Navigate from './components/Navigate/navigate';
import Header from './components/header/header';
import Skills from './components/skills/skills';
import Identify from './components/identify/identify';
import Top from './components/to_top/top';
import Apresentation from './components/apresentation/apresentation';

function App({Menu}) {
  return (
    <div className="App">
      <Navigate Menu={Menu} />
      <Header />
      <Skills />
      <Apresentation />
      <Identify />
      <Top />
    </div>
  );
}

export default App;
