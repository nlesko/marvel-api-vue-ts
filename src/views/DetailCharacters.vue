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
            :item="this.charactersItem"
            :relatedItemsTitle="'comics'"
            :relatedItems="this.characterComics"
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

const Characters = namespace('Characters');

@Component({
  components: {
    DetailView,
  },
})
export default class DetailCharacters extends Vue {
  public isLoading = true;

  @Characters.State
  public charactersItem!: object;

  @Characters.State
  public characterComics!: Array<object>;

  @Characters.Action
  public getCharactersItem!: (id: string) => Promise<object>;

  @Characters.Action
  public getCharacterComics!: (id: string) => Promise<void>;

  mounted() {
    this.featch();
  }

  public async featch() {
    await this.getCharactersItem(this.$route.params.id);
    await this.getCharacterComics(this.$route.params.id);
    this.isLoading = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
