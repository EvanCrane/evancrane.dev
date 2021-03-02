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
      <footer>
        <a href="#top">
            <div id="scroll-up"></div>
        </a>
        <h3>&#169; 2021 Evan Crane</h3>
    </footer>
    </div>
  );
}

export default App;
