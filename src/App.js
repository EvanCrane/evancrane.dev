import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HeaderComponent from './components/header';
import LandingComponent from './components/landing';
import AboutComponent from './components/about';
import SkillsComponent from './components/about';
import PortfolioComponent from './components/portfolio';
import ContactComponent from './components/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route path="/">
            <LandingComponent />
          </Route>
          <Route path="/about">
            <AboutComponent />
          </Route>
          <Route path="/skills">
            <SkillsComponent />
          </Route>
          <Route path="/portfolio">
            <PortfolioComponent />
          </Route>
          <Route path="/contact">
            <ContactComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
