<template>
        <div class="card col-2 m-2">
            <img :src="post.post_image" class="card-img-top" :alt="post.user.name + '\'s image'">
            <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <h5 class="card-title">Scritto da: {{ post.user.name }}</h5>
                <!-- <p class="card-text">{{ post.post_content }}</p> -->
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
    props: ['post'], 
}
</script>

<style lang="scss">

</style>