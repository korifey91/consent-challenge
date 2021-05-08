import fetcher from './index';
import dummy from './dummy';

it('throws an error if url is not provided', () => {
  expect(() => fetcher()).toThrowError();
});

it('returns a dummy array for GET request', () => {
  const expected = { data: { consents: Array.from(dummy) } };
  expect(fetcher({ method: 'get', url: '/consents' })).toStrictEqual(expected);
});

it('returns a posted element for POST request', () => {
  const data = { id: dummy.length + 1 };
  const expected = { data };
  expect(fetcher({ method: 'post', url: '/consents', data })).toStrictEqual(
    expected
  );
});
