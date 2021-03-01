import './App.css';
import HeaderComponent from './components/header';
import AboutComponent from './components/about';
import SkillsComponent from './components/skills';
import ContactComponent from './components/contact';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className="body-sections">
        <AboutComponent />
        <SkillsComponent />
        <ContactComponent />
      </div>
    </div>
  );
}

export default App;
