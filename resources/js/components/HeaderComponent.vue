<template>
    <header>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="#">BoolPress</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li v-for="(link, index) in navLinks" :key="index" class="nav-item text-capitalize" 
                    :class="{ active_el : link.isActive === true }"
                    @click="navActiveOnClick(index)">

                    <router-link class="nav-link" :to="{ name: link.name }">
                        {{ link.name }}
                    </router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/admin/users">Admin</a>
                </li>
            </ul>
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
            navLinks:[
                {
                    route: 'home',
                    name: 'home',
                    isActive: true,
                },
                {
                    route: 'posts',
                    name: 'posts',
                    isActive: false,
                },
                {
                    route: 'tags',
                    name: 'tags',
                    isActive: false,
                },
            ],
        }
    },
    methods:{
        navActiveOnClick(index) {
            this.navLinks.forEach((element) => {
                element.isActive = false;
            });
            console.warn(index);
            this.navLinks[index].isActive = true;
        },
    },
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