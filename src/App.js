import './App.css';

import Header from './components/Header'
import MainContent from './components/MainContent'
import LetsStayInTouch from './components/LetsStayInTouch';
import Download from './components/Download';

function App() {
  return (
    <div className="overflow-hidden">
      <Header/>
      <MainContent/>
      <LetsStayInTouch/>
      <Download/>
    </div>
  );
}

export default App;
