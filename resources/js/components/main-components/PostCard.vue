<template>
        <div class="card col-2 m-2">
            <img :src="post.post_image" class="card-img-top" :alt="post.user.name + '\'s image'">
            <div class="card-body">
                <h5 class="card-title">
                    <router-link :to="{ name: 'singlepost', params: { id: post.id } }" 
                    v-if="isShow()">
                        {{ post.title }}
                    </router-link>
                    <div>
                        {{ post.title }}
                    </div>
                </h5>
                <h5 class="card-title">Scritto da: {{ post.user.name }}</h5>
                <p class="card-text">{{ post.post_content }}</p>
                <h5 class="card-title">
                    Tags: 
                    <span v-for="tag in post.tags" :key="tag.id">
                        {{ tag.name }}
                    </span>
                </h5>
            </div>
        </div>
</template>

<script>
export default {
    name: "PostCard",
    props: { post : Object, required : true }, 

    data(){
        return {
            routeId :  this.$route.params.id,
        }
    },

    methods:{
        isShow(){
            if(this.routeId !== undefined){
                return false;
            }else{
                return true;
            }
            
        }
    }
}
</script>

<style lang="scss">

</style>