import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { BaseLayout, Navigation, PageLayout } from './components';
import { GiveConsent, CollectedConsents } from './Pages';

function App() {
  return (
    <Router>
      <BaseLayout>
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
      </BaseLayout>
    </Router>
  );
}

export default App;
