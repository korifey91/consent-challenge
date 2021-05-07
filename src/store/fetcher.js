import dummyData from './dummy';

/**
 * * Mock implementation of the Axios package
 * https://github.com/axios/axios
 * @param url
 * @param method
 */
export default function mockedAxios({ url, method = 'get', data } = {}) {
  if (url === undefined || typeof url !== 'string') {
    throw new Error('url should be provided');
  }

  if (data && method === 'post') {
    dummyData.push(data);
  }

  return dummyData;
}
