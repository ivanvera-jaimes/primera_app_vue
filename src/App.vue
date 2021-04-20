<template>
  <div id="app">
    <header-component  :header="header"/>
    <body-component />
    <footer-component />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderComponent from './components/Header.vue';
import FooterComponent from './components/Footer.vue';
import BodyComponent from './components/Body.vue';

@Component({
    components:{
    HeaderComponent,
    FooterComponent,
    BodyComponent,
  },
})

export default class App extends Vue{}
</script>

