<template>
  <div class="row">
        

        <div class="col-12">
            
                <h1>
                    Searching with: {{ needle }}
                </h1>
                <div class="text-center" v-if="posts.length > 0">
                    <div v-for="post in posts" :key="post.id">
                        {{ post.title }}
                    </div>
                </div>
                <div v-else>
                    Nessun risultato :/
                </div>
        </div>

            <!-- <div class="text-center my-3" v-else> -->
            <div class="text-center my-3" v-if="isLoaded">
                Fai una ricerca! 
            </div>

        <!-- </div> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SearchPostsPage',
    props:{
        posts:{type: [Array, Object], required: false},
    },
    data(){
        return{
            // needle: '',
            // posts: [],
            // isLoaded: false,
        }
    },
    methods:{
        // $_getPosts(needle){
        //     axios.get('/api/posts/search/' + needle)
        //     .then((response) => {
        //         console.log(response.data);
        //         this.posts = response.data.results;
        //         this.isLoaded = true;
        //     }).catch((error) =>{
        //         console.error(error);
        //     });
        // },

        $_searchInPosts(needle){
            console.log(needle);
            if(needle !== ''){
                this.$_getPosts(needle);
            }
        }
    }
}
</script>

<style>

</style>