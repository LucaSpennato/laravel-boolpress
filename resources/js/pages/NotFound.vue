<template>
  <div class="row">
    <div class="col-6 m-auto mt-5 text-danger text-center">
        <h1>
            404 Not Found!
        </h1>
        <router-link class="btn btn-lg btn-danger" :to="{ name: 'home' }">
            Go back!
        </router-link>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>