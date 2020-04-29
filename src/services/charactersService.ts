import http from './httpClient';

const resource = 'v1/public/characters';
export default {
  get() {
    return http.get(`${resource}`);
  },

  getItem(id: string) {
    return http.get(`${resource}/${id}`);
  },

  getItemComics(id: string) {
    return http.get(`${resource}/${id}/comics`);
  },
};
