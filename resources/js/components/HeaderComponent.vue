<template>
    <header>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="#">BoolPress</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li v-for="(link, index) in navLinks" :key="index" class="nav-item text-capitalize" 
                    :class="{ active_el : link.isActive === true }"
                    @click="$_getNavIndex(index)">

                    <router-link class="nav-link" :to="{ name: link.name }">
                        {{ link.name }}
                    </router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admin/users">Admin</a>
                </li>
            </ul>
                <div class="d-flex text-end" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                    v-model.trim="needle" @keyup.enter="$_sendInput()">
                    <a class="btn btn-outline-success" @click="$_sendInput()">
                        Search
                    </a>
                </div>
            </div>
        </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent",
    data: function(){
        return{
            needle: null,
            urlPath: '',
            navIndex: null,
            navLinks:[
                
                { route: '/home', name: 'home', isActive: true  },
                { route: '/posts', name: 'posts', isActive: false },
                { route: '/tags', name: 'tags', isActive: false },
            ],
        }
    },
    methods:{
        $_sendInput(){
            this.$emit('searchByTitle', this.needle.trim());
            this.needle = '';
            this.urlPath = '';
        },

        $_getNavIndex(index){
            this.navIndex = index;
            this.urlPath = this.$route.name; 
        },  

        $_navActiveOnClick(index) {
            this.navLinks.forEach((element) => {
                element.isActive = false;
            });

            this.urlPath = this.$route.name; 

            if(this.urlPath == this.navLinks[index].name){
                this.navLinks[index].isActive = true;
            }
        },
    },
    watch:{
        urlPath(newPath, oldPath){

            if(newPath != oldPath){
                console.log('route-changed');
                this.$_navActiveOnClick(this.navIndex);
                console.log(this.urlPath);
            }
        }
    },
    created(){
        // ? contiene tutte le informazioni della rotta!
        console.log(this.$route);
    }
}
</script>

<style lang="scss" scoped>

    .active_el{
        a{
            color: red;
            border: solid 1px red;
        }
    }

</style>