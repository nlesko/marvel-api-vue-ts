<template>
  <v-app>
    <Header />
    <v-content>
        <router-view></router-view>
    </v-content>
    <v-footer>Data provided by Marvel. © 2014 Marvel</v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header,
  },
})

export default class App extends Vue {
}
</script>
