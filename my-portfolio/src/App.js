// React
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// pages 
import home from './pages/home.js';
import about from './pages/about.js';
import projects from './pages/projects.js';
import contact from './pages/contact.js';

// components
import Header from './components/header.js';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>

        {/* Pages */}
        <Route path="/about" component={about} />
        <Route path="/projects" component={projects} />
        <Route path="/contact" component={contact} />

        {/* home */}
        <Route path="/" component={home} />
      </Switch>
    </Router>
  );
}

export default App;
