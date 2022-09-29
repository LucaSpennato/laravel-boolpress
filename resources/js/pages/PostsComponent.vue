<template>
  <section class="container-fluid py-2 justify-content-center">

    <LoaderComponent v-if="isLoaded"/>

    <div class="row" v-else>
        <h1 class="text-center py-2">
        Posts:
        </h1>

        <div class="col-12 text-center py-3">
            <span class="btn btn-primary mx-1 d-inline-block text-light" v-for="index in lastPage" :key="index" @click="paginationNav(index)">
            {{ index }}
            </span>
        </div>
        
        <PostCard v-for="(post, index) in posts" :key="index" :post="post"/>

        
    </div>

  </section>
</template>

<script>
import PostCard from '../components/main-components/PostCard.vue';
import LoaderComponent from '../components/LoaderComponent.vue';
import axios from 'axios';

export default {
    name: 'Homecomponent',
    components: {
        PostCard,
        LoaderComponent,
    },

    data: function(){
        return{
            posts: [],
            url: 'http://127.0.0.1:8000/api/posts',
            lastPage: '',
            isLoaded: true,
        }
    },
    
    methods:{

        paginationNav(indexes){
        console.log(indexes);
        this.currentPage = indexes;
        this.getPosts();
        },
        
        getPosts(){ 
            axios.get(this.url + '?',{
            params:{
            page: this.currentPage,
                }
            })
            .then((response) => {
                console.log(this.topic);
                console.error(response.data.results);
                this.posts = response.data.results.data;
                this.lastPage = parseInt(response.data.results.last_page);
                console.log(this.lastPage);
                this.isLoaded = false;

            }).catch((error) =>{
                console.error(error);
            })
        },
    },
    created(){
        this.getPosts();
    }
}
</script>

<style lang="scss">

</style>