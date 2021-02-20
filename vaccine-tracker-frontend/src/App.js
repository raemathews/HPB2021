import './App.css';
import Dashboard from './Dashboard.js';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import FormEntry from './FormEntry.js'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink activeClassName="active"
          exact to={'/FormEntry'} >
            switch to form entry
        </NavLink>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/FormEntry" component={FormEntry} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
