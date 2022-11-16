import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navebar from './components/Navebar';
import Welcome from './components/Welcome';
import Pageundef from './components/Pageundef';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navebar />
          <Switch>
            <Route exact path="/" render={(props) => <Welcome />} />
            <Route exact path="*">
              <Pageundef />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
