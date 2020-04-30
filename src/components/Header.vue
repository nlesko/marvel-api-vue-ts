<template>
  <header class="header">
    <v-navigation-drawer v-model="sidebar" app>
      <v-list
        nav
        dense
      >
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
           :to="item.path">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="primary" dark>
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
        <!-- <v-toolbar-side-icon @click="sidebar = !sidebar"> </v-toolbar-side-icon>-->
      </span>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          text
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private msg!: string;

  private appTitle = 'Vue Marvel App';

  private sidebar = false;

  menuItems: Array<object> = [
    { title: 'Browse Universe', path: '/' },
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.v-navigation-drawer{
  @media(min-width: 600px){
    display: none !important;
  }
}
header{
  @media(min-width: 600px){
    left: 0 !important;
  }
}
</style>
