<template>
  <section class="browse">
    <SearchBar
      :searchCriteria="searchCriteria"
      @changeCriteria="updateCriteria($event)"
    />
    <section v-for="(criteria, i) in searchCriteria" :key="i">
    <SearchResults
      :searchCriteria="searchCriteria"
      :criteria="criteria"
    />
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchBar from '@/components/SearchBar.vue';
import SearchResults from '@/components/SearchResults.vue';

@Component({
  components: {
    SearchBar,
    SearchResults,
  },
})

export default class About extends Vue {
  public searchTypes: Array<string> = ['comics', 'characters'];

  public searchCriteria: Array<string> = [this.searchType];

  get searchType() {
    return this.searchTypes[Math.floor(Math.random() * this.searchTypes.length)];
  }

  updateCriteria(updatedCriteria: Array<string>) {
    // console.log('upc', updatedCriteria);
    this.searchCriteria = updatedCriteria;
    // console.log(this.searchCriteria);
  }
}
</script>
