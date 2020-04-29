<template>
 <v-card
    class="mx-auto"
    color="whitesmoke"
    flat
  >
    <v-row class="px-0 d-flex align-center">
      <v-col
        cols="12"
        lg="9"
      >
        <v-card-title class="headline mb-1">{{ item.title ? item.title : item.name }}</v-card-title>
        <v-card-text>
          {{ item.description }}
        </v-card-text>
      </v-col>
      <v-col
        col="12"
        lg="3"
      >
        <v-img :src="item.thumbnail.path + '.' + item.thumbnail.extension"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card
          tile
        >
          <v-list v-if="relatedItems.length > 0">
            <v-subheader>{{ relatedItemsTitle | toUpperCase }}</v-subheader>
            <v-list-item-group color="primary" class="d-flex flex-row flex-wrap">
              <v-list-item
                v-for="item in relatedItems"
                :key="item.id"
                class="inline-list-item"
                @click="goToRelatedItem(item.id)"
              >
                <v-list-item-avatar>
                  <v-img
                    :src="item.thumbnail.path+'.'+item.thumbnail.extension">
                  </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="item.name ? item.name : item.title">
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  filters: {
    toUpperCase(val: string) {
      return val.toUpperCase();
    },
  },
})
export default class DetailView extends Vue {
  @Prop() readonly item!: object;

  @Prop() readonly isLoading!: boolean;

  @Prop() readonly relatedItems!: Array<object>;

  @Prop() readonly relatedItemsTitle!: string;

  goToRelatedItem(id: string): void {
    this.$router.push(`/${this.relatedItemsTitle}/${id}`);
  }
}

</script>

<style lang="scss" scoped>
.inline-list-item{
  flex: 0 50%;
  max-width: 50%;
}
</style>
