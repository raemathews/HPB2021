import './App.css';
import Dashboard from './Dashboard.js';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import FormEntry from './FormEntry.js';
import LogIn from './LogIn';
import Header from "./Header";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={(props) => (<Dashboard />)}/>
          <Route path='/LogIn' component={LogIn} />
          <Route path="/FormEntry" component={FormEntry} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
