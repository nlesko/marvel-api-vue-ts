<template>
  <section class="browse">
    <SearchBar
      :searchCriteria="searchCriteria"
      @changeCriteria="updateCriteria($event)"
      @onQueryChange="updateResults($event)"
    />
    <section v-for="(criteria, i) in searchCriteria" :key="i">
    <SearchResults
      :criteria="criteria"
      :results="comicsResults"
      :searchQuery="searchQuery"
      :isLoading="isLoading"
      v-if="criteria == 'comics'"
    />
    <SearchResults
      :criteria="criteria"
      :results="charactersResults"
      :searchQuery="searchQuery"
      :isLoading="isLoading"
      v-if="criteria == 'characters'"
    />
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import SearchBar from '@/components/SearchBar.vue';
import SearchResults from '@/components/SearchResults.vue';

const Comics = namespace('Comics');
const Characters = namespace('Characters');

@Component({
  components: {
    SearchBar,
    SearchResults,
  },
})

export default class About extends Vue {
  public searchTypes: Array<string> = ['comics', 'characters'];

  public searchCriteria: Array<string> = [this.searchType];

  public searchQuery = '';

  public isLoading = true;

  @Comics.State
  public comics!: Array<object>;

  @Comics.Action
  public getComics!: () => Promise<void>;

  @Characters.State
  public characters!: Array<object>;

  @Characters.Action
  public getCharacters!: () => Promise<void>;

  mounted() {
    this.fetch();
    // console.log(this.comics);
  }

  get searchType() {
    return this.searchTypes[Math.floor(Math.random() * this.searchTypes.length)];
  }

  get comicsResults() {
    return this.comics.filter((result: object) => (
      // eslint-disable-next-line no-console
      result.title.toLowerCase().match(this.searchQuery.toLowerCase())
    ));
  }

  get charactersResults() {
    return this.characters.filter((result: object) => (
      // eslint-disable-next-line no-console
      result.name.toLowerCase().match(this.searchQuery.toLowerCase())
    ));
  }

  async fetch() {
    await this.getComics();
    await this.getCharacters();
    this.isLoading = false;
  }

  updateCriteria(updatedCriteria: Array<string>) {
    // console.log('upc', updatedCriteria);
    this.searchCriteria = updatedCriteria;
    // console.log(this.searchCriteria);
  }

  updateResults(query: string) {
    this.searchQuery = query;
  }
}
</script>
