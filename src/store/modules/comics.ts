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
    this.context.commit('setComics', data.data.results);
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
