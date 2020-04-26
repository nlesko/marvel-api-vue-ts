<template>
  <section class="browse">
    <SearchBar />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchBar from '@/components/SarchBar.vue';

@Component({
  components: {
    SearchBar,
  },
})

export default class About extends Vue {
}
</script>
