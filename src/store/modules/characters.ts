import {
  VuexModule, Module, Mutation, Action,
} from 'vuex-module-decorators';
import CharactersService from '../../services/charactersService';

@Module({ namespaced: true })

class Characters extends VuexModule {
  public characters: Array<object> = [];

  public charactersItem: object = {};

  public characterComics: Array<object> = [];

  @Mutation
  public setCharacters(newCharacters: Array<object>): void {
    this.characters = newCharacters;
  }

  @Mutation
  public setCharactersItem(newCharactersItem: object) {
    this.charactersItem = newCharactersItem;
  }

  @Mutation
  public setCharactersItemComics(characterComics: Array<object>) {
    this.characterComics = characterComics;
  }

  @Action
  public async getCharacters(): Promise<void> {
    const { data } = await CharactersService.get();
    this.context.commit('setCharacters', data.data.results);
  }

  @Action
  public async getCharactersItem(id: string): Promise<void> {
    const { data } = await CharactersService.getItem(id);
    this.context.commit('setCharactersItem', data.data.results[0]);
  }

  @Action
  public async getCharacterComics(id: string): Promise<void> {
    const { data } = await CharactersService.getItemComics(id);
    this.context.commit('setCharactersItemComics', data.data.results);
  }
}

export default Characters;
