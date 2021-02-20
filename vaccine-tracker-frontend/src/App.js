import './App.css';
import Dashboard from './Dashboard.js';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import FormEntry from './FormEntry.js'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/FormEntry" component={FormEntry} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
