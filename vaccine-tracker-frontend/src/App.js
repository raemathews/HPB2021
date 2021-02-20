import './App.css';
import { FormEntry } from 'FormEntry.js';
import { Dashboard } from 'Dashboard.js';
import { BrowserRouter, } from 'react-router-dom';


function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/FormEntry" component={FormEntry} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
