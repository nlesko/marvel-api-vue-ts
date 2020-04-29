<template>
    <component
          :is="transition !== 'None' ? `v-${transition}` : 'div'"
          hide-on-leave
    >
          <v-skeleton-loader
            v-if="isLoading"
            height="94"
            type="image"
          >
          </v-skeleton-loader>

          <v-card
            v-else
          >
          <router-link :to="`${criteria}/${id}`">
            <v-img
              class="white--text align-end"
              max-height="358"
              :src="imgSrc"
            >
              <v-card-title class="overlay">{{ title }}</v-card-title>
            </v-img>
            </router-link>
          </v-card>
    </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SearchResultsItem extends Vue {
  @Prop() readonly imgSrc!: string;

  @Prop() readonly title!: string;

  @Prop() readonly id!: string;

  @Prop() readonly criteria!: string;

  @Prop() readonly isLoading!: boolean;

  private transition = 'fade-transition';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.overlay{
  background: rgba(0,0,0,0.7);
}
</style>
