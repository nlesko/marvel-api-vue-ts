import {
  VuexModule, Module, Mutation, Action,
} from 'vuex-module-decorators';
import ComicsService from '@/services/comicsService';

@Module({ namespaced: true })

class Comics extends VuexModule {
  public comics: Array<object> = [];

  public comicsItem: object = {};

  public comicsCharacters: Array<object> = [];

  @Mutation
  public setComics(newComics: Array<object>): void {
    this.comics = newComics;
  }

  @Mutation
  public setComicsItem(newComicsItem: object) {
    this.comicsItem = newComicsItem;
  }

  @Mutation
  public setComicsItemCharacters(comicsCharacters: Array<object>) {
    this.comicsCharacters = comicsCharacters;
  }

  @Action
  public async getComics(): Promise<void> {
    const { data } = await ComicsService.get();
    const moreData = await ComicsService.get(20, 100);
    const results = [...data.data.results, ...moreData.data.data.results];
    const filteredResults = results.reduce((acc, current) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const x = acc.find((item: any) => item.id === current.id);
      if (!x) {
        return acc.concat([current]);
      }
      return acc;
    }, []);
    this.context.commit('setComics', filteredResults);
  }

  @Action
  public async getComicsItem(id: string): Promise<void> {
    const { data } = await ComicsService.getItem(id);
    this.context.commit('setComicsItem', data.data.results[0]);
  }

  @Action
  public async getComicsCharacters(id: string): Promise<void> {
    const { data } = await ComicsService.getItemCharacters(id);
    this.context.commit('setComicsItemCharacters', data.data.results);
  }
}

export default Comics;
