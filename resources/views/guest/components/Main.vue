<template>
  <main>
    <div class="container" v-if="isLoaded">
      <div class="row">

        <div class="col-4 m-auto text-center my-5">
          <label for="call">Select the call</label>
          <select class="form-select" id="call" v-model="topic" @change="modify()">
            <option>posts</option>
            <option>tags</option>
          </select>
        </div>
      </div>

        <div class="row py-2 justify-content-center" v-if="arePosts">
          <h1 class="text-center py-2">
            Posts:
          </h1>

          <div class="col-12 text-center py-3">
              <span class="btn btn-primary mx-1 d-inline-block text-light" v-for="index in lastPage" :key="index" @click="log(index)">
                {{ index }}
              </span>
          </div>
          
          <card v-for="(post, index) in posts" :key="index" :post="post"/>
        </div>
        <div class="row" v-else>
          <h1 class="text-center py-2">
            Tags:
          </h1>
          <TagsCard v-for="tag in tags" :key="tag.id" :tag="tag"/>
        </div>
    </div>
    <div class="text-center text-warning display-1" v-else>
      Caricamento
    </div>

  </main>
</template>

<script>
import axios from 'axios';
import card from './main-components/card.vue';
import TagsCard from './main-components/TagsCard.vue';

export default {
    components:{
        card,
        TagsCard,
    },

    computed: {
       arePosts: function(){
        if(this.topic === "posts"){
          return true;
        }else{
          return false;
        }
      },
    },

    data: function(){
    return{
      posts: [],
      tags: [],
      url: 'http://127.0.0.1:8000/api/',
      topic : 'posts',
      currentPage: null,
      nextPage: '',
      previousPage: '',
      lastPage: '',
      isLoaded: false,
    }
  },

  methods:{

    log(stuff){
      console.log(stuff);
      this.currentPage = stuff;
      this.getPosts();
    },

    modify(){
      if(this.arePosts === true){
        this.getPosts();
      }else{
        this.getTags();
      }
    },
   
    getTags(){
      axios.get(this.url + this.topic,
      )
      .then((response) => {
        console.log(this.topic);
        console.warn(response.data);
        this.tags = response.data.results;
        this.isLoaded = true;
        
      }).catch((error) =>{
        console.error(error);
      })
    },
    getPosts(){
      axios.get(this.url + this.topic + '?',{
        params:{
          page: this.currentPage,
        }
      }
      )
      .then((response) => {
        console.log(this.topic);
        console.error(response.data.results);
        this.posts = response.data.results.data;
        this.lastPage = parseInt(response.data.results.last_page);
        console.log(this.lastPage);
        this.isLoaded = true;

      }).catch((error) =>{
        console.error(error);
      })
    },

    
  },

  created(){
    this.getTags();
    this.getPosts();
  },
}
</script>

<style lang="scss">

</style>