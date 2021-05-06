/**
 * Mock implementation of the Axios package
 * https://github.com/axios/axios
 * @param url
 * @param options
 */
export default function mockedAxios({ url, method } = {}) {
  if (url === undefined || typeof url !== 'string') {
    throw new Error('url should be provided');
  }
  // @TODO finish implementation
  console.log('method ===>', method);
}
