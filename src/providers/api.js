import axios from 'axios';

const apiBaseURL = 'http://localhost:3000/api/';

export const apiClient = axios.create({
  baseURL: apiBaseURL,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});