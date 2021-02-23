import './App.css';
import LandingComponent from './components/landing';
import AboutComponent from './components/about';
import SkillsComponent from './components/about';
import PortfolioComponent from './components/portfolio';
import ContactComponent from './components/contact';

function App() {
  return (
    <div className="App">
      <LandingComponent />
      <AboutComponent />
      <SkillsComponent />
      <PortfolioComponent />
      <ContactComponent />
    </div>
  );
}

export default App;
