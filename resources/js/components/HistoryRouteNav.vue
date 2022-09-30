<template>
  <nav class="container-fluid">
    <div class="row">
        <div class="col-6 d-flex m-auto justify-content-around text-center mt-1">

            <button class="btn btn-danger" @click="redirect">Redirect</button>
            <button class="btn btn-warning" @click="back">Back</button>
            <button class="btn btn-success" @click="forward">Forward</button>

        </div>
    </div>
  </nav>
</template>

<script>
export default {
    methods:{
        redirect(){
            this.$router.push({name : 'home'});
        },

        back(){
            console.warn(this.$route);
            this.$router.go(-1);
        },

        forward(){
            this.$router.go(1);
        },
    }
}
</script>

<style>

</style>