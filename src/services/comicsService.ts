import http from './httpClient';

const resource = 'v1/public/comics';
export default {


  get() {
    return http.get(`${resource}`);
  },

  getItem(id: string) {
    return http.get(`${resource}/${id}`);
  },

  getItemCharacters(id: string) {
    return http.get(`${resource}/${id}/characters`);
  },
};
