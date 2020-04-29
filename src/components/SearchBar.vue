<template>
  <v-container>
    <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="query"
            solo
            label="Enter to search for hero"
            clearable
            @input="onQueryChange"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="d-flex flex-row">
          <v-switch
             v-model="searchTypes"
             label="Comics"
             value="comics"
             class="mr-5"
             @change="changeCriteria(searchTypes)"
            >
            </v-switch>
          <v-switch
            v-model="searchTypes"
            label="Characters"
            value="characters"
            class="ml-5"
            @change="changeCriteria(searchTypes)"
          >
          </v-switch>
        </v-col>
      </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  Component, Emit, Prop, Vue,
} from 'vue-property-decorator';

@Component({
})

export default class SearchBar extends Vue {
  @Prop() searchCriteria!: Array<string>;

  private query = '';

  public searchTypes: Array<string> = this.searchCriteria;

  public updatedCriterias!: Array<string>;

  private isLoading = false;

  @Emit('changeCriteria')
  changeCriteria(newCriteria: Array<string>) {
    // this.updatedCriterias = newCriteria;
    this.updatedCriterias = newCriteria;
    return this.updatedCriterias;
  }

  @Emit('onQueryChange')
  onQueryChange() {
    return this.query;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
