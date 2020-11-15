import './App.css';
import './assets/css/fonts.css';
import './assets/css/styles.css';
import Hero from './components/hero';
import MobileMenu from './components/mobileMenu';
import WorkWith from './components/workWith';
import Features from './components/features';
import FeatureProduct from './components/featureProduct';
import PlasticBottle from './components/plasticBottle';
import Testimonials from './components/testimonials';
import CallToAction from './components/callToAction';

function App() {
  return (
    <div className="App">
      <MobileMenu />
      <Hero />
      <WorkWith />
      <Features />
      <FeatureProduct />
      <PlasticBottle />
      <Testimonials />
      <CallToAction />
    </div>
  );
}

export default App;
