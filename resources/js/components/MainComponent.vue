<template>
  <main>
    <div class="container">
      <!-- <div class="row"> -->
          <!-- 
          <div class="col-4 m-auto text-center my-5">
            <label for="call">Select the call</label>
            <select class="form-select" id="call" v-model="topic" @change="modify">
              <option>posts</option>
              <option>tags</option>
            </select>
          </div>
        </div> -->

        
        
    </div>
  </main>
</template>

<script>


export default {
    name: "MainComponent",
        components:{
        PostCard,
        TagsCard,
    },

    computed: {
       arePosts: function(){
        if(this.topic === "posts"){
          return true;
        }else{
          return false;
        }
      },
    },

    data: function(){
    return{
      
      
      // topic : 'posts',
      // currentPage: null,
      // nextPage: '',
      // previousPage: '',
      // lastPage: '',
      // isLoaded: false,
    }
  },

  methods:{

    // modify(){
    //   if(this.arePosts === true){
    //     this.getPosts();
    //   }else{
    //     this.getTags();
    //   }
    // },

  },

  created(){

  },
}
</script>

<style lang="scss">

</style>