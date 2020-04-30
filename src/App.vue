<template>
  <v-app>
    <Header />
    <v-content>
        <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Header,
    Footer,
  },
})

export default class App extends Vue {
}
</script>

<style lang="scss">
.loading-holder{
  position: relative;
}
.loading{
    position: absolute;
    padding: 10px 15px;
    border-radius: 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(204, 204, 204, 0.7);
    color: #000;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.33);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.33);
    box-shadow: 5px 2px 5px 0px rgba(0,0,0,0.33);
}
.v-content{
  @media(min-width: 600px){
    padding-left: 0px !important;
  }
}
</style>
