<template>
  <v-container>
    <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="message2"
            solo
            label="Enter to search for hero"
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SearchBar extends Vue {
  @Prop() private msg!: string;

  private baseUrl = 'https://gateway.marvel.com/'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
