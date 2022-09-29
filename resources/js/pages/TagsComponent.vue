<template>
    <section class="container-fluid">

        <LoaderComponent v-if="isLoaded"/>

        <div class="row" v-else>
            <h1 class="text-center py-2">
                Tags:
            </h1>
            <TagsCard v-for="tag in tags" :key="tag.id" :tag="tag"/>
        </div>
        
    </section>
</template>

<script>
import axios from 'axios';
import TagsCard from '../components/main-components/TagsCard.vue';
import LoaderComponent from '../components/LoaderComponent.vue';

export default {
    name : "TagsComponent",
    components:{
        TagsCard,
        LoaderComponent,
    },

    data: function(){
        return{
            tags: [],
            url: 'http://127.0.0.1:8000/api/tags',
            isLoaded : true,
        }
    },

    methods:{
        getTags(){
        axios.get(this.url)
            .then((response) => {
                console.log(this.topic);
                console.warn(response.data);
                this.tags = response.data.results;
                this.isLoaded = false;
                
            }).catch((error) =>{
                console.error(error);
            })
        },
    },

    created(){
        this.getTags();
    }
}
</script>

<style>

</style>