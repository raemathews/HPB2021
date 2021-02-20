import './App.css';
import Dashboard from './Dashboard.js';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import FormEntry from './FormEntry.js'

const tbd = [
  {
      rank: '1',
      distributionCenter: 'Northeastern University',
      jurisdiction: 'Boston',
      wasted: '4,329',
  },
  {
      rank: '2',
      distributionCenter: 'Northeastern University',
      jurisdiction: 'Boston',
      wasted: '4,329',
  },
  {
      rank: '3',
      distributionCenter: 'Northeastern University',
      jurisdiction: 'Boston',
      wasted: '4,329',
  },
  {
      rank: '4',
      distributionCenter: 'Northeastern University',
      jurisdiction: 'Boston',
      wasted: '4,329',
  },
  {
      rank: '5',
      distributionCenter: 'Northeastern University',
      jurisdiction: 'Boston',
      wasted: '4,329',
  },
  {
      rank: '6',
      distributionCenter: 'Northeastern University',
      jurisdiction: 'Boston',
      wasted: '4,329',
  },
  {
      rank: '7',
      distributionCenter: 'Northeastern University',
      jurisdiction: 'Boston',
      wasted: '4,329',
  },
  {
      rank: '8',
      distributionCenter: 'Northeastern University',
      jurisdiction: 'Boston',
      wasted: '4,329',
  },
  {
      rank: '9',
      distributionCenter: 'Northeastern University',
      jurisdiction: 'Boston',
      wasted: '4,329',
  },
]

const lgd = [
  { x: '1/1/21', y: 22918 },
  { x: '2/1/21', y: 87923 },
  { x: '3/1/21', y: 48472},
  { x: '4/1/21', y: 48378 },
  { x: '5/1/21', y: 10892 },
  { x: '6/1/21', y: 48294 },
  { x: '7/1/21', y: 22918 },
  { x: '8/1/21', y: 87923 },
  { x: '9/1/21', y: 48472},
  { x: '10/1/21', y: 48378 },
  { x: '11/1/21', y: 10892 },
  { x: '12/1/21', y: 48294 },
]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink activeClassName="active"
          exact to={'/FormEntry'} >
          switch to form entry
        </NavLink>
        <Switch>
          <Route exact
            path='/'
            render={(props) => (
              <Dashboard tableData={tbd} lineGraphData={lgd} isAuthed={true} />
            )}
          />
          <Route path="/FormEntry" component={FormEntry} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
