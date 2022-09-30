<template>
  <div>

    <HeaderComponent @searchByTitle="$_getPostsByTitle"/>
    <HistoryRouteNav/>

    <MainComponent :posts="posts"/>
    
  </div>
</template>

<script>

import MainComponent from '../components/MainComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import HistoryRouteNav from '../components/HistoryRouteNav.vue';

import axios from 'axios';

export default {
  name: "App",
  components:{
    MainComponent,
    HeaderComponent,
    HistoryRouteNav,
  },
  data(){
    return{
      posts: [],
    }
  },

  methods:{

    $_getPostsByTitle(needle){
      if(needle !== undefined && needle !== null && needle !== ''){
        axios.get('/api/posts/search/' + needle )
        .then((response)=>{
          console.log(response);
          this.posts = response.data.results;

          if(this.posts.length > 0){
            console.log('ciao');
            this.$router.push({name : 'searchtitle'});
          }

        })
        .catch((error)=>{
          console.warn(error);
        });
      }
    }
  }
}
</script>

<style lang="scss">

</style>