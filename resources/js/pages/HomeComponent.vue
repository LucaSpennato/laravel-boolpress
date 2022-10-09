<template>
  <section class="row">
    <div class="flex">
        <h1 class="mx-5">
          Home! 
        </h1>
        <div>
          <button class="btn brand-btn-outline-1">
            we
          </button>
          <button class="btn btn-outline-danger">
            we
          </button>
          <button class="btn brand-btn-3">
            we
          </button>
        </div>
    </div>

    <div class="col-12">
      <ul>
        <li v-for="item in filtered" :key="item.name">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <button class="btn btn-lg  btn-success" @click="key()">
      login
    </button>
  </section>
</template>

<script>
import axios from 'axios';
export default {
    name : 'HomeComponent',
    computed:{
      /**
       *  Retun a filtered array
       */
      filtered(){
      
        let array = [];

        [...this.words].forEach(item =>{
          // console.log(item.name)
          // array.push(item.name);
          if(item.name.length > 3){
            // console.warn(item)
            array.push(item);
          }
        })
        return array;
      },
    },
    methods:{
      authkey(){
        axios.post('/api/login',{
          'email' : "lucal@gmail.com",
          'password' : "ciaociaociao" 
        })
        .then(response =>{
          console.warn(response);
        });
      },
      key(){
        axios.get('/sanctum/csrf-cookie').then(response => {
          console.warn(response);
          axios.post('/login?email=lucal@gmail.com&password=ciaociaociao')
          .then(response =>{
            console.log(response)
          } )
        });
      }
    },
    created(){
      // this.authkey();
      // this.key();
    },
    data: function(){
      return{
       words: [
        {
          name:'ciao',
          demo: 'come va',
        },
        {
          name:'ehi',
          demo: 'ke se dice',
        },
        {
          name:'no',
          demo: 'nope',
        },
        {
          name:'cumpa',
          demo: 'cuci',
        },
       ],
      }
    },
}
</script>

<style lang="scss" scoped>

@import '../../sass/partials/_classes.scss';
@import '../../sass/partials/_btns.scss';


html {
  scroll-behavior: smooth;
}
  .we{
    height: 16rem;
  }


</style>