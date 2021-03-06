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
      :error="error"
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

  public error = false;

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.comics.filter((result: any) => (
      result.title.toLowerCase().match(this.searchQuery.toLowerCase())
    ));
  }

  get charactersResults() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.characters.filter((result: any) => (
      result.name.toLowerCase().match(this.searchQuery.toLowerCase())
    ));
  }

  async fetch() {
    try {
      await this.getComics();
      await this.getCharacters();
      this.isLoading = false;
    } catch (err) {
      this.error = true;
      this.isLoading = false;
      // console.error(err.message);
    }
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
