import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { unmountComponentAtNode } from 'react-dom';

import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';

import CollectedConsents from './CollectedConsents';

const mockStore = configureStore([]);

let container = null;
let store = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);

  store = mockStore({
    consents: {
      data: [],
      meta: {
        totalCount: null,
        totalPages: null,
        currentPage: null,
      },
      error: null,
    },
  });
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders CollectedConsents correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <CollectedConsents />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders collected consents from store', () => {
  store = mockStore({
    consents: {
      data: [
        {
          id: 1,
          name: 'User Friendly',
          email: 'user@friendly.com',
          consents: ['Receive newsletter'],
        },
      ],
      meta: {
        totalCount: null,
        totalPages: null,
        currentPage: null,
      },
      error: null,
    },
  });

  const { container, getByText } = render(
    <Provider store={store}>
      <CollectedConsents />
    </Provider>
  );

  expect(getByText('User Friendly')).toBeInTheDocument();
});
