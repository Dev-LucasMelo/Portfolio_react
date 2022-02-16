import './App.css';
import Navigate from './pages/page_principal/components/Navigate/navigate.jsx'
import Header from './pages/page_principal/components/header/header.jsx'
import Skills from './pages/page_principal/components/skills/skills.jsx'
import Identify from './pages/page_principal/components/identify/identify.jsx'
import Apresentation from './pages/page_principal/components/apresentation/apresentation.jsx';
import Top from './pages/page_principal/components/to_top/top.jsx'


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
