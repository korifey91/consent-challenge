import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Layout, Navigation, PageLayout } from './components';

function App() {
  return (
    <Router>
      <Layout>
        <Navigation />
        <PageLayout>
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
        </PageLayout>
      </Layout>
    </Router>
  );
}

export default App;
