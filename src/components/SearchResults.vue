<template>
  <v-container fluid>
      <v-row v-if="isLoading" transition="fade-transition">
        <v-col cols="12">

            <span class="loading">
              Loading data...
            </span>

        </v-col>
    </v-row>
    <v-row v-if="results.length < 1 && !isLoading">
      <v-col cols="12">
            <span class="loading">
              Sorry, no data found!
            </span>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12"><h3 class="">{{ criteria.toUpperCase() }}</h3></v-col>
      <v-col
        cols="12"
        sm="6"
        lg="3"
        v-for="item in this.results.slice(0,20)" :key="item.id"
      >
        <SearchResultsItem
          :imgSrc="item.thumbnail.path + '.' + item.thumbnail.extension"
          :title="item.title || item.name"
          :isLoading="isLoading"
          :criteria="criteria"
          :id="item.id"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import SearchResultsItem from '@/components/SearchResultsItem.vue';

@Component({
  components: {
    SearchResultsItem,
  },
})
export default class SearchResults extends Vue {
  @Prop() criteria!: string;

  @Prop() results!: Array<object>;

  @Prop() searchQuery!: string;

  @Prop() public isLoading!: boolean;

  private transition = 'fade-transition';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
