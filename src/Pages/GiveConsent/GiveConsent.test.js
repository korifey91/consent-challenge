import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { unmountComponentAtNode } from 'react-dom';

import configureStore from 'redux-mock-store';
import { fireEvent, render, screen } from '@testing-library/react';

import GiveConsent from './GiveConsent';

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

test('renders GiveConsent correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <GiveConsent />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('submit button disabled if all inputs are empty', () => {
  render(
    <Provider store={store}>
      <GiveConsent />
    </Provider>
  );

  expect(screen.getByRole('button')).toBeDisabled();
});

test('submit button is not disabled if all inputs fullfield', () => {
  render(
    <Provider store={store}>
      <GiveConsent />
    </Provider>
  );

  const inputs = screen.getAllByRole('textbox');
  inputs.forEach((input) =>
    fireEvent.change(input, {
      target: { value: 'JavaScript' },
    })
  );

  const checbox = screen.getByRole('checkbox', { name: 'Receive newsletter' });
  fireEvent.click(checbox);

  expect(screen.getByRole('button')).toBeEnabled();
});
