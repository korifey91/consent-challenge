import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Layout, Navigation, PageLayout } from './components';
import GiveConsent from './Pages/GiveConsent/GiveConsent';
import CollectedConsents from './Pages/CollectedConsents/CollectedConsents';

function App() {
  return (
    <Router>
      <Layout>
        <Navigation />
        <PageLayout>
          <Switch>
            <Route path="/give-consent">
              <GiveConsent />
            </Route>
            <Route path="/consents">
              <CollectedConsents />
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
