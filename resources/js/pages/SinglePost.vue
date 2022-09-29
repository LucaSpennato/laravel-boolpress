<template>
    <div class="row justify-content-center mt-5">
        <PostCard :key="post.id" :post="post"/>
    </div>
</template>

<script>
import PostCard from '../components/main-components/PostCard.vue';
import axios from 'axios';
export default {
    name: "SinglePost",
    components:{
        PostCard,
    },
    data(){
        return{
            post: {},
            url: 'http://127.0.0.1:8000/api/post/',
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
                this.isLoaded = true;

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