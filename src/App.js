import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout1 from './Layout/Layout_1';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/layout-1">Layout 1</Link>
      

        <Switch>
            <Route path="/layout-1" exact>
              <Layout1/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
