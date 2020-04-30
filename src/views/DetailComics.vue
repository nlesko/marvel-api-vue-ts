<template>
  <section class="detail-comics">
    <v-container>
      <v-row v-if="fetchError && !isLoading">
        <v-col cols="12">
            <span class="loading">Sorry, but couldn't find any data about this comics</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          lg="10"
          class="mx-auto"
        >
          <div class="skeleton-wrapper loading-holder mt-5 pt-5" v-if="isLoading">
            <span class="loading">Loading data..</span>
            <v-row>
              <v-col cols="12" lg="9">
                <v-skeleton-loader type="article">
                </v-skeleton-loader>
              </v-col>
              <v-col cols="12" lg="3">
                <v-skeleton-loader type="image" height="500" min-height="500">
                </v-skeleton-loader>
              </v-col>
            </v-row>
          </div>
          <DetailView
            :item="this.comicsItem"
            :relatedItemsTitle="'characters'"
            :relatedItems="this.comicsCharacters"
            :isLoading="isLoading"
            v-else
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import DetailView from '@/components/DetailView.vue';

const Comics = namespace('Comics');

@Component({
  components: {
    DetailView,
  },
})
export default class DetailComics extends Vue {
  public isLoading = true;

  @Comics.State
  public comicsItem!: object;

  public fetchError = false;

  @Comics.State
  public comicsCharacters!: Array<object>;

  @Comics.Action
  public getComicsItem!: (id: string) => Promise<object>;

  @Comics.Action
  public getComicsCharacters!: (id: string) => Promise<void>;

  mounted() {
    this.featch();
  }

  public async featch() {
    try {
      await this.getComicsItem(this.$route.params.id);
      await this.getComicsCharacters(this.$route.params.id);
      this.isLoading = false;
    } catch (err) {
      this.isLoading = false;
      this.fetchError = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
