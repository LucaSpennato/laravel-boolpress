<template>
  <div class="row">
    <div class="col-6 offset-3">
        <div class="text-center fs-1 text-danger">
            {{ tag.name }}
        </div>
        <ul class="list-group">
            <li class="list-group-item">Posts in {{ tag.name }} tag:</li>
            <li v-for="post in tag.posts" :key="post.id"
                class="list-group-item">
                {{ post.title }} - Author: {{ post.user.name }}
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: "TagsCard",
    props: {
        tag : Object,
        required : true,
    }
}
</script>

<style>

</style>