<template>
  <section class="detail-comics">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          lg="10"
          class="mx-auto"
        >
          <DetailView
            :item="this.comicsItem"
            :relatedItemsTitle="'characters'"
            :relatedItems="this.comicsCharacters"
            :isLoading="isLoading"
            v-if="!isLoading"
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
    await this.getComicsItem(this.$route.params.id);
    await this.getComicsCharacters(this.$route.params.id);
    this.isLoading = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
