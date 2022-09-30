<template>
  <div>

    <HeaderComponent />
    <HistoryRouteNav />

    <MainComponent />
    
  </div>
</template>

<script>

import MainComponent from '../components/MainComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import HistoryRouteNav from '../components/HistoryRouteNav.vue';

export default {
  name: "App",
  components:{
    MainComponent,
    HeaderComponent,
    HistoryRouteNav
  },
}
</script>

<style lang="scss">

</style>