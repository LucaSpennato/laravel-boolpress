<template>
  <div class="row">
        <div class="col-3 m-auto">
            <div class="d-flex mt-5" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model.trim="needle">
                <a class="btn btn-outline-success" type="submit" @click="$_searchInPosts(needle)">
                    Search
                </a>
            </div>
        </div>

        <div class="col-12">
            <h1>
                {{ needle }}
            </h1>
            <div v-if="isLoaded">
                <div v-for="post in posts" :key="post.id">
                    {{ post.title }}
                </div>
            </div>
            <div v-else>
                ciao
            </div>


        </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SearchPostsPage',
    data(){
        return{
            needle: '',
            posts: [],
            isLoaded: false,
        }
    },
    methods:{
        $_getPosts(needle){
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
            this.$_getPosts(needle);
        }
    }
}
</script>

<style>

</style>