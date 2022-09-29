<template>
  <div>

    <HeaderComponent />

    <MainComponent />
    
  </div>
</template>

<script>

import MainComponent from '../components/MainComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';

export default {
  name: "App",
  components:{
    MainComponent,
    HeaderComponent,
  },
}
</script>

<style lang="scss">

</style>