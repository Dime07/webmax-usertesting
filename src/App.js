import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout1 from './Layout/Layout_1';
import "../node_modules/video-react/dist/video-react.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
