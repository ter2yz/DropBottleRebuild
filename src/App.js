import './App.css';
import './assets/css/styles.css';
import Hero from './components/hero';
import MobileMenu from './components/mobileMenu';
import WorkWith from './components/workWith';
import Features from './components/features';

function App() {
  return (
    <div className="App">
      <MobileMenu />
      <Hero />
      <WorkWith />
      <Features />
    </div>
  );
}

export default App;
