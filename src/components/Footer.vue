<template>
  <v-card height="150">
    <v-footer
      absolute
      class="font-weight-medium indigo white--text"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <p>Data provided by Marvel. © 2014 Marvel</p>
        {{ new Date().getFullYear() }} — <strong><a style="text-decoration: none;" class="white--text" href="https://github.com/nlesko" target="_blank">Nikola Leško</a></strong>
      </v-col>
    </v-footer>
  </v-card>
</template>

2020 — Vuetify


<script>
export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
};
</script>
