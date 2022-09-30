<template>

    <div class="row justify-content-center mt-5" >
        <LoaderComponent v-if="isLoaded"/>
        <PostCard :key="post.id" :post="post" :id="id"  v-else/>
    </div>

</template>

<script>
import PostCard from '../components/main-components/PostCard.vue';
import LoaderComponent from '../components/LoaderComponent.vue';

import axios from 'axios';

export default {
    name: "SinglePost",
    props:{
        id: { type: Number, required: false },
    },
    components:{
        PostCard,
        LoaderComponent,
    },
    data(){
        return{
            post: {},
            url: 'http://127.0.0.1:8000/api/post/',
            isLoaded: true,
           
        }
    },

    methods:{
        getPost(){ 
            const id = this.$route.params.id;
            axios.get(this.url + id)
            .then((response) => {
                console.log(this.topic);
                console.error(response.data.results);
                this.post = response.data.results;
                this.isLoaded = false;

            }).catch((error) =>{
                console.error(error);
            })
        },
    },
    created(){
        this.getPost();
    }
}
</script>

<style>

</style>