<template>
  <v-container>
      <v-row v-if="isLoading" transition="fade-transition">
        <v-col cols="12">
          Loading data...
        </v-col>
    </v-row>
    <v-row v-if="criteria == 'comics'">
      <v-col
        cols="12"
        md="6"
        lg="3"
        v-for="item in comics.slice(0,20)" :key="item.id"
      >
        <SearchResultsItem
          :imgSrc="item.thumbnail.path + '.' + item.thumbnail.extension"
          :title="item.title"
          :isLoading="isLoading"
          :criteria="criteria"
          :id="item.id"
        />
      </v-col>
    </v-row>
    <v-row v-if="criteria == 'characters'">
      <v-col
        cols="12"
        md="6"
        lg="3"
        v-for="item in characters.slice(0,20)" :key="item.id"
      >
        <SearchResultsItem
          :imgSrc="item.thumbnail.path + '.' + item.thumbnail.extension"
          :title="item.name"
          :criteria="criteria"
          :isLoading="isLoading"
          :id="item.id"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import SearchResultsItem from '@/components/SearchResultsItem.vue';

const Comics = namespace('Comics');
const Characters = namespace('Characters');

@Component({
  components: {
    SearchResultsItem,
  },
})
export default class SearchResults extends Vue {
  @Comics.State
  public comics!: Array<object>;

  @Comics.Action
  public getComics!: () => Promise<void>;

  @Characters.State
  public characters!: Array<object>;

  @Characters.Action
  public getCharacters!: () => Promise<void>;

  @Prop() searchCriteria!: Array<string>;

  @Prop() criteria!: string;

  private transition = 'fade-transition';

  public isLoading = true;

  mounted() {
    this.fetch();
    // console.log(this.comics);
  }

  // updated() {
  //   console.log(this.searchCriteria);
  // }

  async fetch() {
    await this.getComics();
    await this.getCharacters();
    this.isLoading = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
