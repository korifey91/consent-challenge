import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Navigation from './components/Navigation/Navigation';

import './App.scss';

function App() {
  return (
    <Router>
      <Layout>
        <Navigation />
        <section>
          <Switch>
            <Route path="/give-consent">
              <div>1</div>
            </Route>
            <Route path="/consents">
              <div>2</div>
            </Route>
            <Route path="*">
              <Redirect to="/give-consent" />
            </Route>
          </Switch>
        </section>
      </Layout>
    </Router>
  );
}

export default App;
