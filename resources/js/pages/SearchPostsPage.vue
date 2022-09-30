<template>
  <div class="row">
        
    <div class="col-12 text-center py-5">
        <div class="text-center" v-if="posts.length > 0">
            <h1>
                Posts with this title: 
            </h1>
            <h1 v-for="post in posts" :key="post.id">
                {{ post.title }}
            </h1>
        </div>
        <h3 v-else>
            Nessun risultato :/
        </h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SearchPostsPage',
    props:{
        posts: {type: [Array, Object], required: false},
    },
    data(){
        return{
            // needle: '',
            posts: [],
            isLoaded: false,
        }
    },
    methods:{
        $_getPosts(needle){
            // console.warn(this.needle);
            axios.get('/api/posts/search/' + needle)
            .then((response) => {
                console.log(response.data);
                this.posts = response.data.results;
                this.isLoaded = true;
            }).catch((error) =>{
                console.error(error);
            });
        },

        $_searchInPosts(needle){
            console.log(needle);
            if(needle !== ''){
                this.$_getPosts(needle);
            }
        }
    },
}
</script>

<style>

</style>