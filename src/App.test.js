import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { unmountComponentAtNode } from 'react-dom';

import App from './App';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

let container = null;
let store = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);

  store = mockStore({
    myState: 'sample text',
  });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders whole app correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
