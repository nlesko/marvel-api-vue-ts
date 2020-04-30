<template>
    <component
          :is="transition !== 'None' ? `v-${transition}` : 'div'"
          hide-on-leave
    >
          <v-skeleton-loader
            v-if="isLoading"
            height="237"
            type="image"
          >
          </v-skeleton-loader>

          <v-card
            v-else
          >
          <router-link :to="`${criteria}/${id}`">
            <v-img
              class="white--text align-end results-img"
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

.results-img{
  max-height: 307px;
  @media(min-width: 600px) and (max-width: 748px){
    max-height: 201px;
  }
  @media(min-width:749px) and (max-width: 859px){
    max-height: 255px;
  }
  @media(min-width: 860px) and (max-width: 999px){
    max-height: 295px;
  }
  @media(min-width: 1000px) and (max-width: 1263px){
    max-height: 346px;
  }
  @media(min-width: 1264px) and (max-width: 1469px){
    max-height: 212px;
  }
  @media(min-width: 1470px) and (max-width: 1660px){
    max-height: 250px;
  }
  @media(min-width: 1661px) and (max-widt: 1782px){
    max-height: 284px;
  }
}
</style>
