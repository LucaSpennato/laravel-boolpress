<template>
  <div class="row">
        
    <div class="col-6 m-auto py-5">
        <div v-if="posts.length > 0">
            <h1 class="text-center">
                Posts with this title: 
            </h1>

            <ul class="list-group">
                <li v-for="post in posts" :key="post.id" class="list-group-item d-inline-flex justify-content-between">
                    <span>
                        <router-link :to="{ name: 'singlepost', params: { id: post.id } }">{{ post.id }} | {{ post.title }}</router-link> 
                    </span>
                    <span>
                        Author: {{ post.user.name }}
                    </span>
                </li>
            </ul>

        </div>
        <h3 v-else class="text-center">
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
            foundPosts: [],
            isLoaded: false,
        }
    },
    methods:{
        $_getPosts(needle){
            // console.warn(this.needle);
            axios.get('/api/posts/search/' + needle)
            .then((response) => {
                console.log(response.data);
                this.foundPosts = response.data.results;
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