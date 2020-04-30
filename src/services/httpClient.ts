import axios from 'axios';

const baseURL = 'http://gateway.marvel.com/';
const apikey = 'eb10e27913508b09e23805fc1bc742b6';
const httpClient = axios.create({
  baseURL,
});
/* eslint-disable */
httpClient.interceptors.request.use((config: any) => {
  config.params = config.params || {}; // eslint-disable-line no-param-reassign
  config.params.apikey = apikey; // eslint-disable-line no-param-reassign
  return config;
});

export default httpClient;
