import http from './httpClient';

const resource = 'v1/public/characters';
export default {
  get(offset?: number, limit?: number) {
    if (offset && !limit) {
      return http.get(`${resource}?offset=${offset}`);
    }
    if (offset && limit) {
      return http.get(`${resource}?offset=${offset}&limit=${limit}`);
    }
    return http.get(`${resource}`);
  },

  getItem(id: string) {
    return http.get(`${resource}/${id}`);
  },

  getItemComics(id: string) {
    return http.get(`${resource}/${id}/comics`);
  },
};
